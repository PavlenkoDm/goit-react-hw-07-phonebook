import {Phonebook} from 'components/index'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#353434'
      }}
    >
      <Phonebook/>
    </div>
  );
};
