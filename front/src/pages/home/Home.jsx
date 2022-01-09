import { Fragment, useContext } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Timeline from '../../components/timeline/Timeline';
import { KudoContext } from '../../contexts/KudoContext';

export default function Home() {
  const { kudos } = useContext(KudoContext);

  return (
    <Fragment>
      <Sidebar />
      <Timeline kudos={kudos} />
    </Fragment>
  );
}
