import styles from './NewPost.module.css';
import Modal from '../../components/Modal/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {
  return (
    <Modal>
      <Form method='POST' className={styles.form}>
        <p>
          <label htmlFor='body'>Your Text</label>
          <textarea
            id='body'
            name='body'
            required
            rows={3}
            placeholder='Yor text...'
          />
        </p>

        <p>
          <label>Your Name</label>
          <input type='text' id='name' placeholder='Yor Name' name='author' />
        </p>
        <p className={styles.actions}>
          <Link type='button' to='..'>
            Cancel
          </Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
