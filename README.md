## Dependency Injection for React

Angular has DI, so why not React?

### installation

uses decorators so must run in an environment that supports these


### usage

configure providers:  
```
const config = [
  { key: "myService", provider: MyService },
  { key: "jobService", provider: JobService },
];

```
providers are just normal JS classes.
next, annotate provider services:
```
@Inject(["myService", "jobService"])
export default class Miz extends Component {
  render() {
    return (
      <h2>
        Miz
        {this.props.myService.name}
        {this.props.jobService.getJob()}
      </h2>
    );
  }
}
```

wrap part of application where DI is to apply with Injector component:
```
<Injector config={config}>
```


