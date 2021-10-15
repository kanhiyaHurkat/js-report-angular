import {Component, OnInit} from '@angular/core';
import {AddFormHttpService} from "../../service/add-form-http.service";
import {RegisterViewModel} from "../../model/register-view.model";
import {take} from "rxjs/operators";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DeleteModalComponent} from "../delete-modal/delete-modal.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList: RegisterViewModel[] = []
  allDeleted: boolean = false;

  constructor(
    private httpService: AddFormHttpService,
    private router: Router,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.httpService.getUsers().pipe(
      take(1)
    ).subscribe((data: RegisterViewModel[]) => {
      this.userList = data
    })
  }

  onView(studentId: string | undefined) {
    window.open(`http://localhost:3000/registration/print_user/${studentId}`, '_blank', 'height=1080,width=1920,scrollbars=yes')
  }

  printUser() {
    window.open(`http://localhost:3000/registration/print_users`, '_blank', 'height=1080,width=1920,scrollbars=yes')
  }

  onDelete(id: string) {
    this.dialog.open(DeleteModalComponent, {
      width: '600px',
    }).afterClosed().pipe(
      take(1)
    ).subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        this.httpService.deleteUser([id]).pipe(
          take(1)
        ).subscribe(() => {
          this.getUserList()
        })
      }
    })
  }

  onDeleteMultiple() {
    this.dialog.open(DeleteModalComponent, {
      width: '600px',
      height: '400px'
    }).afterClosed().pipe(
      take(1)
    ).subscribe((isConfirmed: boolean) => {
      if (isConfirmed) {
        const selectedUser = this.userList.filter(user => user.isSelected)
        if (selectedUser && selectedUser.length) {
          const deletedItems = selectedUser.map(item => item.id)
          this.httpService.deleteUser(deletedItems).pipe(
            take(1)
          ).subscribe(() => {
            this.getUserList()
            this.allDeleted = false
          })
        }
      }
    })
  }

  onEdit(userId: string) {
    this.router.navigate(['/edit-user'], {
      queryParams: {
        userId
      }
    }).then()
  }

  updateAllComplete() {
    this.allDeleted = this.userList != null && this.userList.every(t => t.isSelected);
  }

  someComplete(): boolean {
    if (this.userList == null) {
      return false;
    }
    return this.userList.filter(t => t.isSelected).length > 0 && !this.allDeleted;
  }

  setAll(completed: boolean) {
    this.allDeleted = completed;
    if (this.userList == null) {
      return;
    }
    this.userList.forEach(t => t.isSelected = completed);
  }
}
