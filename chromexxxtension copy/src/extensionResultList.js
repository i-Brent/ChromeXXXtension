import React from 'react'
import ExtensionResult from './extensionResult'

class ExtensionResultList extends React.Component {

  constructor(props){
    super(props)
    this.state={
      wiki: {
        omnivore: {
          summary: 'Omnivore is a consumption classification for animals that have the capability to obtain chemical energy and nutrients from materials originating from plant and animal origin. Often, omnivores also have the ability to incorporate food sources such as algae, fungi, and bacteria into their diet as well.',
          link: 'https://en.wikipedia.org/wiki/Omnivore'
        },
        herbavore: {
          summary: 'A herbivore is an animal anatomically and physiologically adapted to eating plant material, for example foliage, for the main component of its diet. As a result of their plant diet, herbivorous animals typically have mouthparts adapted to rasping or grinding. Horses and other herbivores have wide flat teeth that are adapted to grinding grass, tree bark, and other tough plant material.',
          link: 'https://en.wikipedia.org/wiki/herbivore'
        },
        carnivore: {
          summary: 'A carnivore, meaning "meat eater" is an organism that derives its energy and nutrient requirements from a diet consisting mainly or exclusively of animal tissue, whether through predation or scavenging. Animals that depend solely on animal flesh for their nutrient requirements are called obligate carnivores while those that also consume non-animal food are called facultative carnivores.',
          link: 'https://en.wikipedia.org/wiki/carnivore'
        }
      },
      askMo: {
        omnivore:[
          {
            img: '../501c3273417c4b9bcb8abe1e534ba97b.jpeq',
            headline:"America's Food Crisis: THE OMNIVORE'S DILEMMA",
            author: "THNKR"
          },
          {
            img: '../501c3273417c4b9bcb8abe1e534ba97b.jpeq',
            headline:"Orcas Slap, Kill, But Don't Eat Their Prey",
            author: "National Geographic"
          },
          {
            question: 'What is an omnivore?'
          },
          {
            question: 'Is your animal a carnivore, omnivore or herbivore?'
          },
          {
            question: 'what is an herbivore?'
          },
        ],
        herbavore:[
          {
            img: 'img',
            headline:"Eat your greens",
            author: "THNKR"
          },
          {
            img: 'img',
            headline:"Cows: Lawnmowers or Lovers",
            author: "National Geographic"
          },
          {
            question: 'What is an omnivore?'
          },
          {
            question: 'Is your animal a carnivore, omnivore or herbivore?'
          },
          {
            question: 'what is an herbivore?'
          },
        ],
        carnivore:[
          {
            img: 'img',
            headline:"Baby Shark",
            author: "THNKR"
          },
          {
            img: 'img',
            headline:"Shark Attack in Redwood City",
            author: "National Geographic"
          },
          {
            question: 'What is an omnivore?'
          },
          {
            question: 'Is your animal a carnivore, omnivore or herbivore?'
          },
          {
            question: 'what is an herbivore?'
          },
        ]
      }
    }
  }
  render() {
    console.log(this.state);
    const that = this
    switch (this.props.which) {
      case "Omnivores":
        return(<ExtensionResult wiki={that.state.wiki.omnivore} askMo={that.state.askMo.omnivore}/>)
      case "Herbivores":
        return(<ExtensionResult wiki={that.state.wiki.herbavore} askMo={that.state.askMo.herbavore}/>)
      case "Carnivores":
        return(<ExtensionResult wiki={that.state.wiki.carnivore} askMo={that.state.askMo.carnivore}/>)
      default:
        return null
    }
  }
}

export default ExtensionResultList
