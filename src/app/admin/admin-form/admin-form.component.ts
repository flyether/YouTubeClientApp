import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createNewVideoAction } from 'src/app/storage/store-video/video.action';
import { SearchItem } from 'src/app/youtube/models/search-item.model';
import { DateValidator } from './services/date-validator';
import { CreateNewVideo } from './models';
import { newVideoCreator } from './newVideoCreator';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.scss'],
})
export class AdminFormComponent implements OnInit, OnDestroy {
  creteVideoForm = {} as FormGroup;

  indexTag = 1;

  maxLengthTag = false;

  tagsIndex: number[] = [0];

  complete = false;

  constructor(private formBuilder: FormBuilder, private store$: Store) {}

  ngOnInit() {
    this.creteVideoForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      link: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required, DateValidator]),
      description: ['', [Validators.minLength(3), Validators.maxLength(255)]],
      img: new FormControl('', [Validators.required]),
      tags: this.formBuilder.array(
        [this.createEmpFormGroup()],
        [Validators.required],
      ),
    });
  }

  createEmpFormGroup() {
    return this.formBuilder.group({
      tag: ['', [Validators.required]],
    });
  }

  get tags(): FormArray {
    return this.creteVideoForm.get('tags') as FormArray;
  }

  addTag() {
    if (this.tagsIndex.length === 5) {
      this.maxLengthTag = true;
    }
    if (this.tagsIndex.length < 5) {
      const i: number = this.indexTag + 1;
      this.tagsIndex.push(i);
      const fg = this.createEmpFormGroup();
      this.tags.push(fg);
    }
  }

  onFormSubmit() {
    this.creteVideoForm.markAllAsTouched();
    if (this.creteVideoForm.invalid) {
      return;
    }
    const video: CreateNewVideo = this.creteVideoForm.value;
    const newVideoCard: SearchItem = newVideoCreator(
      video.link,
      video.date,
      video.title,
      video.img,
      video.description,
    );
    this.store$.dispatch(createNewVideoAction({ data: newVideoCard }));
    this.complete = true;
  }

  onCloseComplete() {
    this.complete = false;
  }

  resetCreteVideoForm() {
    this.maxLengthTag = false;
    if (this.tagsIndex.length > 1) {
      this.tagsIndex.forEach((i) => this.tags.removeAt(i));
      this.tags.removeAt(1);
      this.tagsIndex = [0];
      this.indexTag = 1;
    }

    this.creteVideoForm.reset();
  }

  ngOnDestroy(): void {
    this.complete = false;
  }
}
