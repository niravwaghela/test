import { AbstractControl } from "@angular/forms";

export function passwordValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  const password = control.get("password");
  const cnfmPass = control.get("cnfmPassword");
  if (password.pristine || cnfmPass.pristine) {
    return null;
  }
  console.log(password);
  return password && cnfmPass && password.value != cnfmPass.value
    ? { mismatch: true }
    : null;
}
