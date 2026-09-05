---
sidebar_label: 2016年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.File-Input-and-Output
  - Computer-Science.Programming.Approximate-Glyph-Recognition
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2016年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff), 祭音Myyura

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20250118205005id_/https://www.i.u-tokyo.ac.jp/edu/course/ci/pdf/2016-8-program.pdf).
We draw digits from 0 to 9 by the following pictographic characters constructed by `*` and `|` (vertical line).
`*`, `|`, and a whitespace character are rendered with a fixed-width font.

```text
****  *  ****  ****  *  *  ****  *     ****  ****  ****
|  |  |     |     |  |  |  |     |        |  |  |  |  |
*  *  *  ****  ****  ****  ****  ****     *  ****  ****
|  |  |  |        |     |     |  |  |     |  |  |     |
****  *  ****  ****     *  ****  ****     *  ****     *
```

(1) Write a program that draws the pictographic characters representing the input number on the screen and then stores them in the file `out1.txt`.  
The pictographic characters are horizontally aligned.
The space between two pictographic characters is two whitespace characters.  

For example, when the input number is `813`, the program will draw and store the following pictographic characters:

```text
****  *  ****
|  |  |     |
****  *  ****
|  |  |     |
****  *  ****
```


(2) Write a program that reads the pictographic characters stored in the file `out1.txt` generated in (1), recognizes them, and prints the number they represent.

(3) Write a program that draws the pictographic characters for the input number, considering the specified spaces and vertical positions, on the screen and then stores them in the file `out3.txt`.
The input is comma-separated integers.
From the beginning, they are the number drawn (non-negative integer), the vertical position of the first digit (non-negative integer), the space between the first and the second digits (positive integer), the vertical position of the second digit, and so on.  
For example, when the input is

```text
813,0,4,1,3,2
```

the program draws 813:

- `8` at the zeroth line,  
- `1` from the first line,  
- `3` from the second line.  
- The space between `8` and `1` is four whitespaces, and the space between `1` and `3` is three whitespaces.  

The pictographic characters will be drawn as follows:

```text
****     
|  |    *   
****    |   ****
|  |    *      |
****    |   ****
        *      |
            ****
```

(4) Write a program that reads the pictographic characters stored in the file `out3.txt` generated in (3), recognizes them, and prints the number they represent.

(5) Create a copy of the file `out3.txt` generated in (3), and name it `out5.txt`.
Modify the pictographic characters in the file `out5.txt` by hand to have a slightly different shape.
After the modification, the size of each pictographic character is still five by four except for the digit `1`, which becomes either five by one or five by two.  

For example, the contents of `out5.txt` after modification may be 8167 represented as follows:

```text
 **                ****
|  |    *   ***       |
 **     |   |        *
|  |    *   ****    |
 **    |    |  |   *
       *    ****
```

Write a program that reads the pictographic characters stored in the file `out5.txt`, recognize them, and prints the most probable number they represent.

### 题目描述

用等宽字体中的 `*`、竖线 `|` 和空格，按原文给出的字形绘制数字 0～9；数字 1 的标准字形为 $5\times1$，其余为 $5\times4$。

1. 读入一个数，在屏幕上横向排列并绘制对应数字字形，同时保存到 `out1.txt`。相邻字形之间放两个空格。例如输入 `813`，输出原文所示的五行字形。
2. 读取第 1 问生成的 `out1.txt`，识别其中字形并输出它所表示的数字。
3. 读入逗号分隔的整数，依次表示：要绘制的非负整数、第一位数字的非负纵向起始行、第一与第二位之间的正整数空格数、第二位的纵向起始行，之后对其余位继续交替给出间距和纵向位置。按这些位置在屏幕绘制字形并保存到 `out3.txt`。例如

   ```text
   813,0,4,1,3,2
   ```

   表示数字 8 从第 0 行开始、1 从第 1 行开始、3 从第 2 行开始；8 与 1 间隔 4 个空格，1 与 3 间隔 3 个空格，输出布局见原文示例。
4. 读取第 3 问生成的 `out3.txt`，识别错开位置、不同间距的各字形并输出所表示的数字。
5. 复制 `out3.txt` 为 `out5.txt`，手工把字形略微改形。修改后除数字 1 可为 $5\times1$ 或 $5\times2$ 外，各字形尺寸仍为 $5\times4$。编写程序读取这种含轻微变形的 `out5.txt`，识别并输出最可能的数字序列；原文给出了变形后的 `8167` 示例。

## **Kai**

[Sample data](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2017-Summer).

### (1) Draw the digits

Store the five rows of each digit as a template. For each output row, place the corresponding template rows horizontally, separating consecutive glyphs by two spaces. Digit 1 has width 1; the others have width 4. Printing and saving the same string gives identical screen and file output.

### (2) Recognize aligned digits

Pad the input rows with spaces to a common width, preserving leading spaces. Columns containing no ink separate glyphs. A standard glyph has width 1 or 4 and height 5; compare each candidate block with the ten templates. Concatenate the recognized digit characters directly. This preserves arbitrarily long digit sequences without evaluating floating-point powers of 10.

### (3) Draw different vertical positions and gaps

Maintain a horizontal coordinate $x$, initially 0. Place digit $i$ at $(x,y_i)$, then advance $x$ by that digit's width plus the specified following gap. Allocate $5+\max_i y_i$ rows. Thus a vertical offset changes the starting row, while horizontal advance depends only on the glyph width and the gap.

The program accepts `python glyph.py 3 813,0,4,1,3,2` and writes `out3.txt`. Blank leading rows and trailing spaces within the canvas are handled without shifting a glyph.

### (4) Recognize independently shifted digits

Use the occupied columns to locate the horizontal candidates, then find the first and last occupied row within each candidate. The resulting vertical bounding box must have height 5. Extract all five rows, including an entirely blank internal row if present, and compare with the templates. The same recognition routine therefore handles both (2) and (4).

### (5) Recognize distorted digits

Copy the chosen `out3.txt` to `out5.txt` and edit its glyphs while retaining the given size conditions. Use an explicit similarity model: a mismatched position involving `|` costs 2; any other mismatched position costs 1. A width-1 or width-2 glyph is compared with digit 1, allowing its single mark to occupy either column in each row for width 2. A width-4 glyph is compared with the other nine digits.

Use dynamic programming over horizontal positions to minimize the sum of these costs, considering widths 1, 2 and 4 and requiring a blank separator between glyphs. This also permits an empty internal column to remain inside a width-4 glyph. The cost of a complete interpretation can be converted to a model probability proportional to $e^{-\text{cost}}$; the program selects the minimum-cost interpretation, breaking ties by digit-string order. This is a specified recognition model, and heavily distorted shapes may remain ambiguous.

For the `out5.txt` example in the question, the minimum-cost recognition is **8167**. Exact standard glyphs have cost zero. A shape outside the stated size and separation model is rejected.

### Complete program

Run parts 1 or 3 with the input as an argument, or enter it at the prompt. Parts 2, 4 and 5 read `out1.txt`, `out3.txt` and `out5.txt`, respectively. For example, `python glyph.py 1 813` creates the aligned file and `python glyph.py 2` recognizes it.

```python
from pathlib import Path
import sys

GLYPHS = [
    ['****', '|  |', '*  *', '|  |', '****'],
    ['*', '|', '*', '|', '*'],
    ['****', '   |', '****', '|   ', '****'],
    ['****', '   |', '****', '   |', '****'],
    ['*  *', '|  |', '****', '   |', '   *'],
    ['****', '|   ', '****', '   |', '****'],
    ['*   ', '|   ', '****', '|  |', '****'],
    ['****', '   |', '   *', '   |', '   *'],
    ['****', '|  |', '****', '|  |', '****'],
    ['****', '|  |', '****', '   |', '   *'],
]


def validate_digits(digits):
    if not digits or any(char not in '0123456789' for char in digits):
        raise ValueError('expected a nonnegative decimal integer')


def render(digits, offsets=None, gaps=None):
    validate_digits(digits)
    offsets = [0] * len(digits) if offsets is None else offsets
    gaps = [2] * (len(digits)-1) if gaps is None else gaps
    if (len(offsets) != len(digits) or len(gaps) != len(digits)-1
            or any(y < 0 for y in offsets) or any(g <= 0 for g in gaps)):
        raise ValueError('invalid offsets or gaps')
    height = max(offsets) + 5
    rows = [[] for _ in range(height)]
    x = 0
    for index, char in enumerate(digits):
        glyph = GLYPHS[ord(char)-ord('0')]
        width = len(glyph[0])
        for row in rows:
            row.extend(' ' for _ in range(x+width-len(row)))
        for dy, line in enumerate(glyph):
            rows[offsets[index]+dy][x:x+width] = line
        x += width + (gaps[index] if index < len(gaps) else 0)
    return [''.join(row).rstrip() for row in rows]


def write_picture(filename, rows):
    text = '\n'.join(rows) + '\n'
    print(text, end='')
    Path(filename).write_text(text, encoding='utf-8')


def read_picture(filename):
    # splitlines preserves leading spaces and handles a missing final newline.
    rows = Path(filename).read_text(encoding='utf-8').splitlines()
    if any(char not in '*| ' for row in rows for char in row):
        raise ValueError('unexpected picture character')
    return rows


def mismatch(first, second):
    if first == second:
        return 0
    return 2 if '|' in (first, second) else 1


def recognize(rows, approximate=False):
    if not rows:
        raise ValueError('empty picture')
    width = max(map(len, rows))
    rows = [row.ljust(width) for row in rows]
    occupied = [any(row[x] != ' ' for row in rows) for x in range(width)]

    def skip_space(x):
        while x < width and not occupied[x]:
            x += 1
        return x

    def candidates(left, glyph_width):
        right = left + glyph_width
        if right > width or not occupied[right-1]:
            return []
        # The next glyph must have at least one entirely blank separating column.
        if right < width and occupied[right]:
            return []
        ink_rows = [i for i, row in enumerate(rows)
                    if any(char != ' ' for char in row[left:right])]
        if not ink_rows or ink_rows[-1]-ink_rows[0]+1 != 5:
            return []
        block = [rows[y][left:right] for y in range(ink_rows[0], ink_rows[0]+5)]
        if not approximate:
            return [(0, str(digit)) for digit, glyph in enumerate(GLYPHS)
                    if block == glyph]
        if glyph_width in (1, 2):
            # A bent 1 has one mark in each row, at either column if width is 2.
            score = 0
            for y, row in enumerate(block):
                mark = '*' if y % 2 == 0 else '|'
                score += min(sum(mismatch(char, mark if x == position else ' ')
                                 for x, char in enumerate(row))
                             for position in range(glyph_width))
            return [(score, '1')]
        return [(sum(mismatch(block[y][x], glyph[y][x])
                     for y in range(5) for x in range(4)), str(digit))
                for digit, glyph in enumerate(GLYPHS) if digit != 1]

    # Each suffix is solved once, from right to left. Cost ties use digit-string order.
    best = {width: (0, '')}
    for left in range(width-1, -1, -1):
        if not occupied[left]:
            best[left] = best.get(left+1)
            continue
        answer = None
        for glyph_width in ((1, 2, 4) if approximate else (1, 4)):
            right = left + glyph_width
            if right > width:
                continue
            suffix = best.get(skip_space(right))
            if suffix is None:
                continue
            for cost, digit in candidates(left, glyph_width):
                candidate = (cost + suffix[0], digit + suffix[1])
                if answer is None or candidate < answer:
                    answer = candidate
        best[left] = answer
    result = best.get(skip_space(0))
    if result is None or not result[1]:
        raise ValueError('picture cannot be segmented under the selected model')
    return result[1], result[0]


if __name__ == '__main__':
    part = sys.argv[1]
    if part in ('1', '3'):
        text = sys.argv[2] if len(sys.argv) > 2 else input().strip()
        if part == '1':
            write_picture('out1.txt', render(text))
        else:
            fields = text.split(',')
            digits = fields[0]
            validate_digits(digits)
            if len(fields) != 2*len(digits):
                raise ValueError('wrong number of positions and gaps')
            positions = [int(field) for field in fields[1:]]
            write_picture('out3.txt', render(digits, positions[::2], positions[1::2]))
    elif part in ('2', '4', '5'):
        filename = {'2': 'out1.txt', '4': 'out3.txt', '5': 'out5.txt'}[part]
        digits, score = recognize(read_picture(filename), approximate=(part == '5'))
        print(digits.lstrip('0') or '0')
    else:
        raise SystemExit('part must be from 1 to 5')
```
