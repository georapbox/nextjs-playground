import type { Metadata } from 'next';
import { Form } from './Form';

const PAGE_TITLE = 'Flash Messages - Client';

export const metadata: Metadata = {
  title: PAGE_TITLE
};

export default function Page() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-xl font-semibold mb-4">{PAGE_TITLE}</h1>

      <p className="mb-4 text-pretty">
        This page demonstrates how to set a flash message on the client side. The form below is
        submitted client-side and depending on the form data, a success or error flash message is
        set and displayed in the next page where the user is redirected. The flash message is
        created using a cookie that atutomatically expires after its value is read and therefore is
        only displayed once.
      </p>

      <Form />
    </div>
  );
}
