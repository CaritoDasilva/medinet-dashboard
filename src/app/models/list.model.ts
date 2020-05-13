import { AttentionType } from './attentionType.model';
import { Tags } from './tags.model';
export class List{
    attentionTypeList: AttentionType[];
    surgeries: AttentionType[];
    derivations: AttentionType[];
    exams: AttentionType[];
    outpatient: AttentionType[];
    constructor( attentionTypeList?: AttentionType[] ) {
      this.attentionTypeList = attentionTypeList;
      this.surgeries = [];
      this.derivations = [];
      this.exams = [];
      this.outpatient = [];
    }

  doClassification(tag) {
    
    switch (tag.name) {
      case 'Derivaciones':
        this.derivations.push(tag);
        break;
        case 'Cirugías':
        this.surgeries.push(tag);
        break;
        case 'Exámenes':
          this.exams.push(tag);
          break;
      case 'Citas ambulatorias':
        this.outpatient.push(tag);
        break;        
    }                
  }
    
  filterByTags(listTofilter: any, typeTags: any) {
    this.surgeries = [];
    this.derivations = [];
    this.exams = [];
    this.outpatient = [];
    this.attentionTypeList = [];  
    let type = typeTags.type
    let classification;

      listTofilter.filter(filteredList =>     
        filteredList.filter((tag, i) => 
        filteredList[i][type] == typeTags.name && this.doClassification(tag)                 
      ));
        classification = [this.outpatient, this.exams, this.surgeries, this.derivations];
        this.attentionTypeList = classification;
  }
}