# Printer API

Ever wanted to upload a PDF from your web app and just print it? Here's the solution ;)

## Getting Started

1. Clone the repo
2. `yarn`
3. Edit the `.env` file. (See below for details)
4. `yarn run build`
5. `yarn start`

### How to edit the .env file

```env
PRINTER_NAME=<THE_NAME_OF_YOUR_PRINTER> (or delete the key completely to use your 'default' printer)
PORT=<PORT> (Default is 3000, change it as you wish)
```

### Troubleshooting

I've only tested it on a Linux system (Ubuntu), and most probably it won't work on Windows. Also, it won't run (at least out of the box) on Docker.

## Acknowledgments

Thanks to [@thiagoelg](https://github.com/thiagoelg) for maintaining the [npm module](https://github.com/thiagoelg/node-printer) to interface with the printer.

