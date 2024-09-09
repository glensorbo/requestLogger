# Request logger

Output will be something like this
![image](https://github.com/user-attachments/assets/608ed3ab-aa8c-4e14-9afd-47104aa25bf2)

requestLogger uses dayjs for timestamp. It will show local time as configured at host the code is running on.
If it's in development on your local computer, it should show the same timestamp as your computer.
If running in docker, it will show timestamp as the docker container is configured. Defaults to UTC.
To alter this in docker, start your container with environment: TZ=<timezone> Example: TZ=Europe/Oslo.

Install by running
Npm
```shell
npm install @glensorbo/requestlogger
```
Yarn
```shell
yarn add @glensorbo/requestlogger
```

Use by setting middleware at app level, or per route. App level will run this middleware for every request on every route.

```ts
import { requestLogger } from '@glensorbo/requestlogger';
import express from 'express';
import type { Express } from 'express';

const app: Express = express();
// requestLogger used as middleware on app level
// will be used on any route after this line
app.use(requestLogger);

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```

```ts
import { requestLogger } from '@glensorbo/requestlogger';
import express from 'express';
import type { Express } from 'express';

const app: Express = express();

// requestLogger as middleware which can be used at any route
app.get('/', requestLogger, function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```

You can define it at app level to run on all routes, but define a route before middleware. Then logging will not happen on that route.
In my case I don't want to log out all requests to the '/health' endpoint
```ts
import { requestLogger } from '@glensorbo/requestlogger';
import express from 'express';
import type { Express } from 'express';

const app: Express = express();

// requestLogger will not trigger on this route as it's being used after this endpoint
app.get('/', function (req, res) {
  res.send('OK');
})

// requestLogger used as middleware on app level
// will be used on any route after this line
app.use(requestLogger);

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(3000);
```
