// @flow

export default class HelloWorld {
  greetings (name: string): string {
    return `greeting ${name}`
  }
}

console.log(new HelloWorld().greetings('toto'))
