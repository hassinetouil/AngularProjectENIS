import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import { Member } from 'src/models/Membre';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  // creation du tableau du service
  public members: Member[] = GLOBAL._DB.members;
  // private httpClient:HttpClient
  constructor() { }
  saveMember(memberToSave: Member):Promise<Member>    {
      // return this.httpClient.post<Member>('uri', member).toPromise();
    // creer un tab dans le service (copiedela bd)
    const objectToInsert = { ...memberToSave, id: memberToSave.id ?? Math.ceil(Math.random() * 100000).toString(), createdDate: memberToSave.createdDate ?? new Date().toISOString() };
    this.members = [objectToInsert, ...this.members.filter(item => item.id != objectToInsert.id)]
    return new Promise(resolve => resolve(objectToInsert));
  }
  getMemberById(id: string): Promise<Member>{
    // return this.httpClient.get<Member>('uri').toPromise();
    return new Promise(resolve => resolve(this.members.filter(item => item.id === id)[0]??null));
  }

  deleteMemberByID(id: string): Promise<void>{
    this.members = this.members.filter(item => item.id != id);
    return new Promise(resolve => resolve());
    // return this.httpClient.delete<Member>('uri').toPromise();
  }
  getAllMembers(): Promise<Member[]>{
    // return this.httpCleint.get<Member[]>('uri').toPromise();
    return new Promise(resolve => resolve(this.members));
  }
}
