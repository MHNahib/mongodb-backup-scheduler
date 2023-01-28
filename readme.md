## :octocat:

```bash
  https://github.com/MHNahib/mongodb-backup-scheduler.git
```

## Installation

```bash
  npm i
```

## Dev start

```bash
  npm run dev
```

## Production start

```bash
  npm start
```

## How it works?

By default it uses child process to run `mongodump` or `mongoexport` using `exec` from `child_process` of node.js.

For backup as gzip

```bash
  mongodump --uri mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>/<DATABASE> --archive=./src/backup/<DATABASE>.gz --gzip
```

For backup as JSON it needs collection name

```bash
  mongoexport --uri mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER>/<DATABASE> --collection <COLLECTION> --type <FILETYPE> --out <FILENAME>
```

## Configure Scheduler

By default it is configured as `every minute`.

[You can use CronTab for more information.](https://crontab.guru/)
