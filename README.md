# apollo-client-helper

A tiny helper we use on top of [apollo-client](https://github.com/apollographql/apollo-client)

## Usage

```
yarn add apollo-client@beta apollo-cache-inmemory@beta apollo-link-http@beta @seracio/apollo-client-helper
```

```javascript
import ApolloHelper from '@seracio/apollo-client-helper';

(async function main(){
  
  // the constructor take a string url as param
  const myHelper = new ApolloHelper('https://myendpoint.com');
    
  // then you can use queries
  const myResult = await myHelper.getQuery(query, variables);
  
  // or mutations
  const myMutation = await myHelper.getMutation(mutation, variables);
}());
```
  
## License
  
MIT License

Copyright (c) 2017 serac.io

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.  
  