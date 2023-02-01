import React from 'react';
import Search from './Search';


function Card({ prompt }) {
  return (
    <div className="pb-12">
      <h3>{prompt}</h3>
      <Search />
    </div>
  );
}

function App() {
  
  return (
    <div className="container mx-auto">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> Book Bingo 2023 </h1>
      </header>
      <div className="grid grid-cols-5 grid-rows-5 gap-0 divide-x divide-y divide-black">

        <Card prompt="about Vampires" />
        <Card prompt="title begins with the first letter of your name" />
        <Card prompt="oldest addition to tBR" />
        <Card prompt="set in forest or desert" />
        <Card prompt="buddy read" />

        <Card prompt="set in school or uni" />
        <Card prompt="mutli-generational family" />
        <Card prompt="a book abput books" />
        <Card prompt="memoir" />
        <Card prompt="villain's perspective" />

        <Card prompt="epistolary novel" />
        <Card prompt="set around end of year holidays" />
        <Card prompt="any 2023 BOtM" />
        <Card prompt="elderly protagonist" />
        <Card prompt="about zombies" />

        <Card prompt="big cat on cover" />
        <Card prompt="BOtM candidate" />
        <Card prompt="meant for younger readers" />
        <Card prompt="colour in the title" />
        <Card prompt="from your country of origin" />

        <Card prompt="features crafting" />
        <Card prompt="adapted for screen" />
        <Card prompt="climate themes" />
        <Card prompt="prize winner" />
        <Card prompt="dystopian novel" />

      </div>
    </div>
  );
}

export default App;
