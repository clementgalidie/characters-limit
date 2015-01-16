# Letters limit

This is a very simple bunch of **JavaScript** lines code to set a limit on the number of letters you can write in a `<textarea></textarea>`.

## Interoperability

| Browsers                        | Versions |                    | 
|-------------------------------- |:--------:|--------------------|
| Google Chrome Canary            | 41.0     | :white_check_mark: |
| Google Chrome                   | 39.0     | :white_check_mark: |
| Firefox Developer Edition       | 36.0     | :white_check_mark: |
| Firefox                         | 35.0     | :white_check_mark: |
| Opera                           | 26.0     | :white_check_mark: |
| Safari                          | 8.0.2    | :white_check_mark: |
| Internet Explorer               | 11       | :white_check_mark: |

## Todo
* Don't set `disable` attribute on `<textarea></textarea>` even if the maximum number of letters has been reached.
* Find a way to increment the counter when users remove some characters.
* Find a way to correctly increment the counter when users copy several words.
