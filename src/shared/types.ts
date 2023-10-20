export enum SelectedPage {
    Home = "home",
    Benifits = "benifits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

export interface BenifitType{
  icon:JSX.Element;
  title:String;
  discription:String;

}
  
export interface ClassType{
  name:string;
  desc?:string;
  image:string;

}
  