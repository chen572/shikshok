import React, { useState } from 'react';
import ForYou from './ForYou';
import Following from './Following';

export default function AppNavbar() {

  const [forYouBold, setForYouBold] = useState(false);
  const [followingBold, setFollowingBold] = useState(true);

  const boldBtn = (e) => {
    if(e.target.id === 'forYou'){
      setFollowingBold(false)  
      setForYouBold (true)
    } else{
      setFollowingBold(true)
      setForYouBold (false)
    }
     
  }
  
  return (
    <div id='navbarDiv'>
      <h1 id='storeName'>WOW.</h1>
      <div className='navbarButtons'>
        <Following boldBtn={boldBtn} followingBold={followingBold} setFollowingBold={setFollowingBold} />
        <ForYou boldBtn={boldBtn} forYouBold={forYouBold} setForYouBold={setForYouBold} />
      </div>
    </div>
  );
}
