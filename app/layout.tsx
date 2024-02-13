import './globals.css';
import Header from '@/components/header';

export const metadata = {
  title: 'Notesy',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
  metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
      <div>
        <Header/>
      </div>
        {props.children}
        {props.modal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
