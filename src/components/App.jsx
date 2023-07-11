import { ContactForm  } from "./ContactForm/ContactForm.jsx";
import { ContactList } from "./ContactList/ContactList";
import { FilterComponent } from "./FilterComponent/FilterComponent";
import { SectionBlock } from "./App.styled.jsx"

export function App(){
  return(
      <>
        <SectionBlock>
        <h1>Phonebook</h1>
        <ContactForm/>
        </SectionBlock>
        <SectionBlock>
        <h2>Contacts</h2>
        <FilterComponent/>
        <ContactList/>
        </SectionBlock>
      </>
  );
}