console.log(window.panda)
let wallet = null
transactionID = "No available transaction ID :<"// to make sure it's false so no one skips a paybox

function initProvider() {
  if ('panda' in window) {
    const provider = window.panda;
    let isPandaInstalled = window.panda.isReady;

    if (provider?.isReady) {
      return provider;
    }
  }
}

var Iwantthisaddress = "";
var receiver = [];
var argumentset = "";

class pandawalletextension {
  getInfo() {
    return {
      id: 'YoursWallet',
      name: 'Yours',
      color1: '#3d633b', // pure red
      color2: '#5a8f58', // pure green
      color3: '#3d633b', // pure blue

      menuIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjYuMDAyODciIGhlaWdodD0iMTI2LjAwMjg3IiB2aWV3Qm94PSIwLDAsMTI2LjAwMjg3LDEyNi4wMDI4NyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1Ni45OTg1NiwtMTE2Ljk5ODU2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNTkuNDk4NTcsMTgwYzAsLTMzLjQxNDAyIDI3LjA4NzQyLC02MC41MDE0MyA2MC41MDE0NCwtNjAuNTAxNDNjMzMuNDE0MDIsMCA2MC41MDE0NCwyNy4wODc0MiA2MC41MDE0NCw2MC41MDE0NGMwLDMzLjQxNDAyIC0yNy4wODc0Miw2MC41MDE0MyAtNjAuNTAxNDQsNjAuNTAxNDNjLTMzLjQxNDAyLDAgLTYwLjUwMTQ0LC0yNy4wODc0MSAtNjAuNTAxNDQsLTYwLjUwMTQzeiIgZmlsbD0iIzNkNjMzYiIgc3Ryb2tlPSIjNWE4ZjU4IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgc3Ryb2tlPSIjMmM0NjJiIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0zMTkuNzcyNTMsMTgxLjkwNDk2Yy0zLjgwOTAzLC0xMC44NDA3MiAwLjgxMTU4LC0yMC40NjA2NiA0LjUzNDAyLC0yOC45NzU1N2MzLjcyMjQ0LC04LjUxNDkyIDE0LjczMzUxLC0xNS4wOTgwNCAxNC43MzM1MSwtMTUuMDk4MDRjMCwwIDYuODY2MzYsMTAuNTU4MzUgNi4zMzY4OCwyMS45NDY0OGMtMC41Mjk0NywxMS4zODgxMyAtMy4zNDY1NSwyMy44MTE0NyAtOC42Nzg1NywyOC40MTkzNWMtNS4zMzIwMiw0LjYwNzg5IC0xMy4xMTY4MSw0LjU0ODUgLTE2LjkyNTg0LC02LjI5MjIyeiIgZmlsbD0iIzNjNWYzYiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTMyMC4yNTIyLDE5Mi44NzAxOGMtNi42NTE3MiwyLjMyNzU3IC0xOC44MjcsLTEuNDE5MDggLTI4Ljk2NTA0LC02LjYzMzUxYy0xMC4xMzgwNCwtNS4yMTQ0MyAtMTUuODcyMDIsLTE2LjQyODEyIC0xNS44NzIwMiwtMTYuNDI4MTJjMCwwIDExLjE5MzY1LC02LjI2NzY0IDIwLjQzMTE0LC01LjI1MzE0YzkuMjM3NDksMS4wMTQ1IDE5Ljg4MDU2LDEuODAwNzQgMjcuMzgyNTMsMTAuNTA0MjFjNy41MDE5Niw4LjcwMzQ3IDMuNjc1MTEsMTUuNDgyOTggLTIuOTc2NjEsMTcuODEwNTV6IiBmaWxsPSIjM2M1ZjNiIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMzI0LjI5NDQ2LDE4Ny41NzQwNmwtMjEuMjA3NDUsLTkuMjY4OTciIGZpbGw9IiMzYzVmM2IiIHN0cm9rZS13aWR0aD0iMi41Ii8+PHBhdGggZD0iTTMxMy43MzQ0MywyMjEuMDMyMTVjMCwwIDE2LjI5NzczLC02LjM3MzY1IDE4LjYzNjU4LC0xNS41NTM3NGMyLjMzODg1LC05LjE4MDA5IC0zLjU2NzI1LC0xNS4wNjQ3MiAtMy41NjcyNSwtMTUuMDY0NzIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMzAuMDY1NSwxODkuMzA4ODZsMi41NTU2MiwtMjMuMjUxMjgiIGZpbGw9IiMzYzVmM2IiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMyMS4xNTA4MSwxNzkuNDU0NzFjLTMuODA5MDMsLTEwLjg0MDcyIDAuODExNTgsLTIwLjQ2MDY2IDQuNTM0MDIsLTI4Ljk3NTU3YzMuNzIyNDQsLTguNTE0OTIgMTQuNzMzNTEsLTE1LjA5ODA0IDE0LjczMzUxLC0xNS4wOTgwNGMwLDAgNi44NjYzNiwxMC41NTgzNSA2LjMzNjg4LDIxLjk0NjQ4Yy0wLjUyOTQ3LDExLjM4ODEzIC0zLjM0NjU1LDIzLjgxMTQ3IC04LjY3ODU3LDI4LjQxOTM1Yy01LjMzMjAyLDQuNjA3ODkgLTEzLjExNjgxLDQuNTQ4NSAtMTYuOTI1ODQsLTYuMjkyMjJ6IiBmaWxsPSIjNWE4ZjU4IiBzdHJva2U9IiM1YThmNTgiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMjEuNjMwNDcsMTkwLjQxOTkzYy02LjY1MTcyLDIuMzI3NTcgLTE4LjgyNywtMS40MTkwOCAtMjguOTY1MDQsLTYuNjMzNTFjLTEwLjEzODA0LC01LjIxNDQzIC0xNS44NzIwMiwtMTYuNDI4MTIgLTE1Ljg3MjAyLC0xNi40MjgxMmMwLDAgMTEuMTkzNjUsLTYuMjY3NjQgMjAuNDMxMTQsLTUuMjUzMTRjOS4yMzc0OSwxLjAxNDUgMTkuODgwNTYsMS44MDA3NCAyNy4zODI1MywxMC41MDQyMWM3LjUwMTk2LDguNzAzNDcgMy42NzUxMSwxNS40ODI5OCAtMi45NzY2MSwxNy44MTA1NXoiIGZpbGw9IiM1YThmNTgiIHN0cm9rZT0iIzVhOGY1OCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTMyNS42NzI3MywxODUuMTIzOGwtMjEuMjA3NDUsLTkuMjY4OTciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI4M2YyNyIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cGF0aCBkPSJNMzE1LjExMjcsMjE4LjU4MTg5YzAsMCAxNi4yOTc3MywtNi4zNzM2NSAxOC42MzY1OCwtMTUuNTUzNzRjMi4zMzg4NSwtOS4xODAwOSAtMy41NjcyNSwtMTUuMDY0NzIgLTMuNTY3MjUsLTE1LjA2NDcyIiBmaWxsPSJub25lIiBzdHJva2U9IiM1YThmNTgiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMzEuNDQzNzcsMTg2Ljg1ODYxbDIuNTU1NjIsLTIzLjI1MTI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMyODNmMjciIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
      blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjYuMDAyODciIGhlaWdodD0iMTI2LjAwMjg3IiB2aWV3Qm94PSIwLDAsMTI2LjAwMjg3LDEyNi4wMDI4NyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1Ni45OTg1NiwtMTE2Ljk5ODU2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yNTkuNDk4NTcsMTgwYzAsLTMzLjQxNDAyIDI3LjA4NzQyLC02MC41MDE0MyA2MC41MDE0NCwtNjAuNTAxNDNjMzMuNDE0MDIsMCA2MC41MDE0NCwyNy4wODc0MiA2MC41MDE0NCw2MC41MDE0NGMwLDMzLjQxNDAyIC0yNy4wODc0Miw2MC41MDE0MyAtNjAuNTAxNDQsNjAuNTAxNDNjLTMzLjQxNDAyLDAgLTYwLjUwMTQ0LC0yNy4wODc0MSAtNjAuNTAxNDQsLTYwLjUwMTQzeiIgZmlsbD0iIzNkNjMzYiIgc3Ryb2tlPSIjNWE4ZjU4IiBzdHJva2Utd2lkdGg9IjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgc3Ryb2tlPSIjMmM0NjJiIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0zMTkuNzcyNTMsMTgxLjkwNDk2Yy0zLjgwOTAzLC0xMC44NDA3MiAwLjgxMTU4LC0yMC40NjA2NiA0LjUzNDAyLC0yOC45NzU1N2MzLjcyMjQ0LC04LjUxNDkyIDE0LjczMzUxLC0xNS4wOTgwNCAxNC43MzM1MSwtMTUuMDk4MDRjMCwwIDYuODY2MzYsMTAuNTU4MzUgNi4zMzY4OCwyMS45NDY0OGMtMC41Mjk0NywxMS4zODgxMyAtMy4zNDY1NSwyMy44MTE0NyAtOC42Nzg1NywyOC40MTkzNWMtNS4zMzIwMiw0LjYwNzg5IC0xMy4xMTY4MSw0LjU0ODUgLTE2LjkyNTg0LC02LjI5MjIyeiIgZmlsbD0iIzNjNWYzYiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTMyMC4yNTIyLDE5Mi44NzAxOGMtNi42NTE3MiwyLjMyNzU3IC0xOC44MjcsLTEuNDE5MDggLTI4Ljk2NTA0LC02LjYzMzUxYy0xMC4xMzgwNCwtNS4yMTQ0MyAtMTUuODcyMDIsLTE2LjQyODEyIC0xNS44NzIwMiwtMTYuNDI4MTJjMCwwIDExLjE5MzY1LC02LjI2NzY0IDIwLjQzMTE0LC01LjI1MzE0YzkuMjM3NDksMS4wMTQ1IDE5Ljg4MDU2LDEuODAwNzQgMjcuMzgyNTMsMTAuNTA0MjFjNy41MDE5Niw4LjcwMzQ3IDMuNjc1MTEsMTUuNDgyOTggLTIuOTc2NjEsMTcuODEwNTV6IiBmaWxsPSIjM2M1ZjNiIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNMzI0LjI5NDQ2LDE4Ny41NzQwNmwtMjEuMjA3NDUsLTkuMjY4OTciIGZpbGw9IiMzYzVmM2IiIHN0cm9rZS13aWR0aD0iMi41Ii8+PHBhdGggZD0iTTMxMy43MzQ0MywyMjEuMDMyMTVjMCwwIDE2LjI5NzczLC02LjM3MzY1IDE4LjYzNjU4LC0xNS41NTM3NGMyLjMzODg1LC05LjE4MDA5IC0zLjU2NzI1LC0xNS4wNjQ3MiAtMy41NjcyNSwtMTUuMDY0NzIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMzAuMDY1NSwxODkuMzA4ODZsMi41NTU2MiwtMjMuMjUxMjgiIGZpbGw9IiMzYzVmM2IiIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTMyMS4xNTA4MSwxNzkuNDU0NzFjLTMuODA5MDMsLTEwLjg0MDcyIDAuODExNTgsLTIwLjQ2MDY2IDQuNTM0MDIsLTI4Ljk3NTU3YzMuNzIyNDQsLTguNTE0OTIgMTQuNzMzNTEsLTE1LjA5ODA0IDE0LjczMzUxLC0xNS4wOTgwNGMwLDAgNi44NjYzNiwxMC41NTgzNSA2LjMzNjg4LDIxLjk0NjQ4Yy0wLjUyOTQ3LDExLjM4ODEzIC0zLjM0NjU1LDIzLjgxMTQ3IC04LjY3ODU3LDI4LjQxOTM1Yy01LjMzMjAyLDQuNjA3ODkgLTEzLjExNjgxLDQuNTQ4NSAtMTYuOTI1ODQsLTYuMjkyMjJ6IiBmaWxsPSIjNWE4ZjU4IiBzdHJva2U9IiM1YThmNTgiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMjEuNjMwNDcsMTkwLjQxOTkzYy02LjY1MTcyLDIuMzI3NTcgLTE4LjgyNywtMS40MTkwOCAtMjguOTY1MDQsLTYuNjMzNTFjLTEwLjEzODA0LC01LjIxNDQzIC0xNS44NzIwMiwtMTYuNDI4MTIgLTE1Ljg3MjAyLC0xNi40MjgxMmMwLDAgMTEuMTkzNjUsLTYuMjY3NjQgMjAuNDMxMTQsLTUuMjUzMTRjOS4yMzc0OSwxLjAxNDUgMTkuODgwNTYsMS44MDA3NCAyNy4zODI1MywxMC41MDQyMWM3LjUwMTk2LDguNzAzNDcgMy42NzUxMSwxNS40ODI5OCAtMi45NzY2MSwxNy44MTA1NXoiIGZpbGw9IiM1YThmNTgiIHN0cm9rZT0iIzVhOGY1OCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTMyNS42NzI3MywxODUuMTIzOGwtMjEuMjA3NDUsLTkuMjY4OTciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI4M2YyNyIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cGF0aCBkPSJNMzE1LjExMjcsMjE4LjU4MTg5YzAsMCAxNi4yOTc3MywtNi4zNzM2NSAxOC42MzY1OCwtMTUuNTUzNzRjMi4zMzg4NSwtOS4xODAwOSAtMy41NjcyNSwtMTUuMDY0NzIgLTMuNTY3MjUsLTE1LjA2NDcyIiBmaWxsPSJub25lIiBzdHJva2U9IiM1YThmNTgiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0zMzEuNDQzNzcsMTg2Ljg1ODYxbDIuNTU1NjIsLTIzLjI1MTI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMyODNmMjciIHN0cm9rZS13aWR0aD0iMi41Ii8+PC9nPjwvZz48L2c+PC9zdmc+",

      blocks: [
        {
          opcode: 'Reload',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Reload Wallet'
        },
        {
          opcode: 'pandaconnect',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Connect to Yours Wallet'
        },
        {
          opcode: 'pandadisconnect',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Disconnect from Yours Wallet'
        },
        {
          opcode: 'pandahas2',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Is Yours Wallet Connected?'
        },
        {
          opcode: 'getaddresses',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get Yours Wallet Address [addressthing]',
          arguments: {
            addressthing: {
              type: Scratch.ArgumentType.STRING,
              menu: 'addressthing'
            }
          }
        },
        {
          opcode: 'sendamoney',
          blockType: Scratch.BlockType.COMMAND,
          text: 'send [muns] sats to [target]',
          arguments: {
            muns: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            target: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'address'
            }
          }
        },
        {
          opcode: 'sendamoremoney',
          blockType: Scratch.BlockType.COMMAND,
          text: 'send to multiple addresses: main: [muns1], [target1] royalty: [muns2], [target2], Extra: [muns3], [target3]',
          arguments: {
            muns1: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            target1: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Main Address'
            },
            muns2: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            target2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Royalty Address'
            },
            muns3: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            },
            target3: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Extra Address'
            }
          }
        },
        {
          opcode: 'resettxid',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Clear Transaction ID'
        },
        {
          opcode: 'gettxid',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Transaction ID'
        },
        /*
        Exchange Rate from number
        {
          opcode: 'ER',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Exchange Rate on [value] BSV to USD',
          arguments: {
            value: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        //ordinal blocks later
        {
          opcode: 'getordin',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Get Ordinals'
        },
        */
      ],
      menus: {
        addressthing: {
          acceptReporters: true,
          items: ['all', 'bsv', 'ordinals', 'identity']
        }
      }
    };
  }

  Reload() {
    wallet = initProvider()
    console.log("reload was attempted")
    console.log(wallet)
    return "Go to console";
  }

  pandahas2() {
    if (wallet && wallet.isConnected) {
      return wallet.isConnected();
    }
    return false;
  }

  pandaconnect() {
      var wallet = initProvider();
    
      // Check if wallet and the connect method exist before calling it
      if (wallet && wallet.connect) {
        wallet.connect();
      } else {
        console.error("Client doesn't have Yours wallet");
      }
  }

  getaddresses(args) {
    Iwantthisaddress = args.addressthing.toLowerCase();
    return getaddressesasync(Iwantthisaddress);
  }

  getordin(args) {
    return getasset();
  }

  pandadisconnect() {
      var wallet = initProvider();
    
      // Check if wallet and the disconnect method exist before calling it
      if (wallet && wallet.disconnect) {
        wallet.disconnect();
      } else {
        console.error("Panda Wallet does not have the 'disconnect' method.");
      }
  }

  resettxid() {
    transactionID = "null"
  }

  gettxid() {
    return transactionID;
  }

  sendamoney(args) {
    let one = args.muns;
    let two = args.target;
    sendamoney_outside(one, two);
  }

  sendamoremoney(args) {
    let one = args.muns1;
    let two = args.target1;
    let three = args.muns2;
    let four = args.target2;
    let five = args.muns3;
    let six = args.target3;
    sendamoney_outside_multi(one, two, three, four, five, six);
    // cooking
  }

}

async function getaddressesasync(Iwantthisaddress) {
  var wallet = initProvider();
  try {
    const { bsvAddress, ordAddress, identityAddress } = await wallet.getAddresses();
    console.log(bsvAddress);
    console.log(ordAddress);
    console.log(identityAddress);

    let transfer = new Array(bsvAddress, ordAddress, identityAddress);
    receiver = JSON.stringify(transfer);

    // Use === for comparison
    if (Iwantthisaddress === "bsv") {
      return bsvAddress;
    }
    if (Iwantthisaddress === "ordinals") {
      return ordAddress;
    }
    if (Iwantthisaddress === "identity") {
      return identityAddress;
    }
    if (Iwantthisaddress === "all") {
      return receiver;
    }
    // ...
  } catch (err) {
    console.log(err);
    return null; // Return a default value or handle the error appropriately
  }
}

async function ER(args) {
  return getexchangerate(args.value);
}

async function sendamoney_outside(one, two) {
  var wallet = initProvider();
  const paymentParams = [
    {
      satoshis: parseFloat(one),
      address: two,
    },
  ];

  try {
    const exchangeRate = await getexchangerate(one); // Replace "bsv" with the appropriate argument
    console.log("Exchange Rate:", exchangeRate);
    const { txid, rawtx } = await wallet.sendBsv(paymentParams);
    transactionID = txid
    console.log(txid);
    // f2fc518036d96c956c30b995b4b0a70d6008b4b7ef666f7c913b2a79ab57d679
  } catch (err) {
    console.log(err);
  }
}

async function sendamoney_outside_multi(one, two, three, four, five, six) {
  var wallet = initProvider();
  const paymentParams = [
    {
      satoshis: parseFloat(one),
      address: two,
    },
    {
      satoshis: parseFloat(three),
      address: four,
    },
    {
      satoshis: parseFloat(five),
      address: six,
    },
  ];

  try {
    const exchangeRate1 = await getexchangerate(one); // Replace "bsv" with the appropriate argument
    console.log("Exchange Rate 1:", exchangeRate1);
    const exchangeRate2 = await getexchangerate(three); // Replace "bsv" with the appropriate argument
    console.log("Exchange Rate 2:", exchangeRate2);
    const exchangeRate3 = await getexchangerate(five); // Replace "bsv" with the appropriate argument
    console.log("Exchange Rate 3:", exchangeRate3);
    const { txid, rawtx } = await wallet.sendBsv(paymentParams);
    console.log(txid);
    // f2fc518036d96c956c30b995b4b0a70d6008b4b7ef666f7c913b2a79ab57d679
  } catch (err) {
    console.log(err);
  }
}

async function getexchangerate(exch) {
  const wallet = initProvider(); // see "Detecting the Provider"
  try {
    console.log("Attempting to get exchange rate for:", exch);
    const rate = await wallet.getExchangeRate(exch);
    console.log("Exchange rate:", rate);
    return rate;
  } catch (err) {
    console.error("Error getting exchange rate:", err);
    return null;
  }
}

async function getasset() {
const wallet = initProvider(); // see "Detecting the Provider"
try {
    const ordinals = await wallet.getOrdinals();
    console.log(ordinals);
    return ordinals;
    // Returns an array of ordinal objects
} catch (err) {
    console.log(err);
}
}
wallet = initProvider();

Scratch.extensions.register(new pandawalletextension());
