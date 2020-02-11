import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../users/usere-list/user-edit/user-edit.component';

export class PreventUnsavesChanges implements CanDeactivate<UserEditComponent> {
    canDeactivate(component: UserEditComponent) {
        if (component.editForm.dirty) {
            return confirm('jesteś pewien, że chcesz kontynułować? Wszelkie niezapisane zmiany zostaną utracone1');
        }
        return true;
    }
}
