import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/phoneBook/actions';
import { getFilterSelector } from '../../redux/phoneBook/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilterSelector);

  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={styles.div}>
      <label className={styles.Label}>
        Search contact's name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
}

// import { filterContacts } from '../../redux/phoneBook/actions';
// import { connect } from 'react-redux';
// import styles from './Filter.module.css';

// const Filter = props => {
//   return (
//     <div className={styles.div}>
//       <label className={styles.Label}>
//         Search contact's name
//         <input
//           className={styles.input}
//           type="search"
//           name="filter"
//           id="filter"
//           onChange={event => props.onFilterContacts(event.target.value)}
//         />
//       </label>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return { state };
// };

// const mapDispatchToprops = {
//   onFilterContacts: filterContacts,
// };

// export default connect(mapStateToProps, mapDispatchToprops)(Filter);
