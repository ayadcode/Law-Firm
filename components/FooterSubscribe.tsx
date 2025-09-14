'use client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';

const API = process.env.NEXT_PUBLIC_STRAPI_URL || '';

export default function FooterSubscribe() {
  const [status, setStatus] = useState<{type:'success'|'error'; message:string} | null>(null);

  return (
    <div className="py-8 bg-brownDark text-white">
      <div className="max-w-4xl mx-auto px-6">
        <Formik
          initialValues={{ email: '' }}
          validationSchema={Yup.object({ email: Yup.string().email('Invalid email').required('Required') })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              setStatus(null);
              // duplicate check
              const check = await axios.get(`${API}/api/subscribers?filters[email][$eq]=${encodeURIComponent(values.email)}`);
              if (check.data?.data?.length > 0) {
                setStatus({ type: 'error', message: 'Email already subscribed' });
              } else {
                await axios.post(`${API}/api/subscribers`, { data: { email: values.email }});
                setStatus({ type: 'success', message: 'Subscribed successfully' });
                resetForm();
              }
            } catch (err) {
              setStatus({ type: 'error', message: 'Subscription failed' });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex gap-3 items-center">
              <div className="flex-1">
                <Field name="email" placeholder="Email" className="w-full px-4 py-2 rounded text-black" />
                <ErrorMessage name="email" component="div" className="text-xs text-red-400 mt-1" />
              </div>
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-brownLight rounded">
                Subscribe
              </button>
            </Form>
          )}
        </Formik>

        {status && <div className={`mt-3 ${status.type === 'success' ? 'text-green-300' : 'text-red-300'}`}>{status.message}</div>}
      </div>
    </div>
  );
}
