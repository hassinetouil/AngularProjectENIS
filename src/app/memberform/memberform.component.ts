import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/services/member.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Membre';
@Component({
  selector: 'app-memberform',
  templateUrl: './memberform.component.html',
  styleUrls: ['./memberform.component.scss']
})
export class MemberformComponent implements OnInit {
  memberGlobal! : Member;
  form!: FormGroup;
  currentID!: string;
  constructor(private MemberService : MemberService,private router:Router , private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
    // 1 : recuperation de id de URL
    this.currentID = this.activatedRoute.snapshot.params.id
    if (!!this.currentID) {
      this.MemberService.getMemberById(this.currentID).then((item) => {
        this.memberGlobal = item;
        this.initForm1(item);
      }) // to do
    }else this.initForm();
  // 2 : si id a une valeur => ddeclancher la fonction du service
    //getMemberById(id) => member
    //3 : sinon appler initForm()

  }
  initForm1(item:Member): void {
    this.form = new FormGroup({
      cin: new FormControl(item.cin, [Validators.required]),
      name: new FormControl(item.name, [Validators.required]),
      type: new FormControl(item.type, [Validators.required]),
      cv: new FormControl(item.cv, [Validators.required]),
    });
  }
  initForm(): void {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
    });
  }
  ONSUB() {
    const objectMember = {...this.memberGlobal,...this.form.value};
    console.log(objectMember);
    //appeller la fonction du service saveMember pour
    // ajouter la ligne dans le tab
    //to do:
    this.MemberService.saveMember(objectMember).then(() => this.router.navigate(["/members"]));
  }

}
