import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import MyButton from '../MyButton/MyButton';
import { addContact } from '../../redux/phoneBook/operations';
import { getContactsSelector } from '../../redux/phoneBook/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsSelector);

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} already exists in contacts`);
      resetForm();
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const disable = name === '' || number === '' ? true : false;

  return (
    <form
      className="form"
      onSubmit={handleSubmitForm}
      autoComplete="off"
      type="submit"
    >
      <label className="label">
        Name
        <input
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className="label">
        Phone number
        <input
          className="input"
          type="text"
          name="number"
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <MyButton className="button" disabled={disable} value="Add Contact" />
    </form>
  );
};

export default ContactForm;

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import MyButton from '../MyButton/MyButton';
// import { getContactsSelector } from '../../redux/phoneBook/selectors';
// import { addContact } from '../../redux/phoneBook/operations';

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//     error: false,
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmitForm = event => {
//     event.preventDefault();

//     if (this.props.contacts.some(contact => contact.name === this.state.name)) {
//       alert(`${this.state.name} already exists in contacts`);

//       this.setState({
//         error: true,
//         name: '',
//         number: '',
//       });
//     } else {
//       const contact = {
//         name: this.state.name,
//         number: this.state.number,
//       };
//       this.props.onAddContact(contact);
//       this.setState({ name: '', number: '' });
//     }
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className="form" onSubmit={this.handleSubmitForm}>
//         <label className="label">
//           Name
//           <input
//             className="input"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label className="label">
//           Phone number
//           <input
//             className="input"
//             type="text"
//             name="number"
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>
//         <MyButton
//           style="button"
//           disable={name === '' || number === '' ? true : false}
//           value="Add Contact"
//           handleClick={() => {}}
//         />
//       </form>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { contacts: getContactsSelector(state) };
// };

// const mapDispatchToProps = {
//   onAddContact: addContact,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
