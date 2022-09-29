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
  saveMember(MemberToSave: Member):Promise<Member>    {
      // return this.httpClient.post<Member>('uri', member).toPromise();
    // creer un tab dans le service (copiedela bd)
    const objectToInsert = { ...MemberToSave, id: Math.ceil(Math.random() * 100000).toString(), createdDate: new Date().toISOString() };
    this.members = [objectToInsert, ...this.members.filter(item => item.id != objectToInsert.id)]
    return new Promise(resolve => resolve(objectToInsert));
  }
  getMemberById(id: string): Promise<Member>{
    // return this.httpClient.get<Member>('uri').toPromise();
    return new Promise(resolve => resolve(this.members.filter(item => item.id === id)[0]??null));
  }
}
