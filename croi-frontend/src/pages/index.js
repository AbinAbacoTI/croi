import Footer from '../components/footer';
import Body from '../components/body';
import Header from '../components/header';
import Link from 'next/link'
//import Footer from '../components/footerstyles';

export default function Example({ data }) {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer />
    </div>
  );
}