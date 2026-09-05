---
sidebar_label: 2014年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.File-Input-and-Output
  - Computer-Science.Programming.Code-Clone-Detection
  - Computer-Science.Programming.String-Processing
  - Computer-Science.Dynamic-Programming.Minimum-Edit-Distance
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2014年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

[Official examination, archived Japanese PDF](https://web.archive.org/web/20151118065556id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2014-8-program.pdf).

A large program often contains duplicate code or code clone. We will write a simple program for detecting duplicate code in a given file.

(1) Write a program that reads `program.txt` in the given USB flash drive and counts the number of semi-colons `;` in that file. The file `program.txt` is a text file.

(2) Write a program that reads `program.txt` and prints all the lines containing `main` with their line numbers.

(3) Write a program that reads `program.txt` and prints duplicate lines successively repeated in the file. The duplicate lines must be printed only once. For example, if the file is:

```
a = 1
a = a + 1
a = a + 1
b = a
a = 1
```

then, the program prints:

```
a = a + 1
```

It does not print `a = 1` because the two lines are not adjacent.

(4) Write a program that reads `program.txt` and prints duplicate lines in the file. It prints a duplicate line even if the second copy of the duplicate lines is not adjacent to the first one. In the case of the example above, the program prints both:

```
a = 1
a = a + 1
```

Every duplicate line must be printed only once in the order of the first occurrence. Furthermore, the program must print the number of the lines printed as duplicates. For the example above, the program prints `2`. Note that a duplicate line may occur more than twice in `program.txt`.

(5) Write a program that reads `program.txt` and prints all pairs of similar two lines in the file. The program must also print the number of the found pairs. The two lines are not necessarily adjacent. Ignore lines shorter than 20 characters.
Two lines are similar if they are not identical and the number of positions at which the corresponding characters are different is less than 5. Here, the corresponding characters at position $i$ are the $i$-th characters in the two lines. If the lengths of the two lines are different, append white spaces to the shorter line so that their lengths are equal. For example (for simplicity, we illustrate with lines shorter than 20 characters),

```
a = 1
a = a + 1
```

The number of positions at which the corresponding characters are different is 3. The characters at the 5th, 7th, and 9th positions are different. The first four characters and two spaces around `+` are identical.

(6) Modify the program written for (5) to change the definition of similarity. In the new definition, two lines are similar if the minimum number of steps for changing one line into the other is less than 4. Two identical lines are not recognized as similar lines. Each step is either substitution of a character for another, deleting one character, or inserting any single character.

(7) Write a program that reads `program.txt` and prints groups of successive lines if they are more than three lines and they are duplicated in the file. Lines are recognized as duplicate ones only if they are identical. Each group of successive duplicate lines is printed only once.

### 题目描述

大型程序常含重复代码（代码克隆）。请编写一组简单程序检测给定文本文件中的重复代码。

1. 读取所给 U 盘中的文本文件 `program.txt`，统计字符分号 `;` 的个数。
2. 读取 `program.txt`，输出所有包含字符串 `main` 的行及其行号。
3. 输出文件中相邻、连续重复的行，每种重复行只输出一次。例如

   ```text
   a = 1
   a = a + 1
   a = a + 1
   b = a
   a = 1
   ```

   只输出 `a = a + 1`；两处 `a = 1` 不相邻，故不输出。
4. 输出文件中所有出现重复的行，即使两个副本不相邻也要识别；每种重复行只按首次出现顺序输出一次，并输出重复行种类数。上例应依次输出 `a = 1`、`a = a + 1`，并输出数量 `2`。同一行可能出现两次以上。
5. 输出文件中所有“相似但不相同”的两行组合及组合总数；两行无须相邻，长度不足 20 的行忽略。先在较短行末补空格使两行等长，若对应字符不同的位置少于 5 个，则两行相似。示例 `a = 1` 与 `a = a + 1` 有第 5、7、9 位共 3 处不同。
6. 修改第 5 问的相似定义：两个不完全相同的行之间，若把一行变为另一行所需的最少操作数小于 4，则相似；一次操作为替换一个字符、删除一个字符或插入任意一个字符。
7. 查找并输出在文件中重复出现的连续行组；每组必须超过 3 行，只有完全相同的行才视为重复，每个重复行组只输出一次。


## **Kai**

Keep all spaces and tabs within a line, including trailing spaces. Remove only the line separator. Number lines starting at 1. The program below accepts the part number and an optional input path, for example `python clone.py 5 program.txt`.

### (1) and (2)

Sum the number of `;` characters in every line. This counts characters in comments and strings too, as required by the character-counting question. For (2), use substring membership, so a line containing `main` anywhere is printed once with its line number. Both scans take linear time in the input size.

### (3) Adjacent duplicate lines

Compare each consecutive pair. When they are equal, print their content unless that content has already been printed. A set prevents both a run of three copies and two separate repeated runs from producing duplicate output. The example produces only `a = a + 1`.

### (4) All duplicate lines

Count occurrences of each complete line. Traverse the distinct lines in order of their first appearance, printing those with counts at least 2. Python's `Counter` preserves insertion order. The number printed is the number of distinct repeated lines, not the number of occurrences or pairs. The example gives `a = 1`, then `a = a + 1`, and finally 2.

### (5) Padded character distance

Consider each unordered pair of eligible line positions exactly once. Reject a line shorter than 20 characters before padding. Reject identical original lines. Using spaces for missing positions, count unequal characters; accept if the count is less than 5. Two different original lines can have padded distance 0, for example if they differ only by trailing spaces, and such a pair satisfies this definition. With $N$ lines of length at most $L$, direct pair comparison takes $O(N^2L)$ time.

### (6) Edit distance

Let $D(i,j)$ be the minimum number of edits between prefixes of lengths $i,j$. The boundary values are $D(i,0)=i$ and $D(0,j)=j$. Removing the last character, inserting the other last character, or aligning the last characters gives

$$
D(i,j)=\min\{D(i-1,j)+1,\ D(i,j-1)+1,\ D(i-1,j-1)+[a_i\ne b_j]\}.
$$

Each final operation belongs to one of these cases, and each candidate constructs an edit sequence, proving the recurrence. Accept distinct original lines when $D(|a|,|b|)<4$, retaining the 20-character filter from (5). Two rows suffice, giving $O(L)$ auxiliary space per pair and $O(N^2L^2)$ total comparison time.

### (7) Repeated groups of at least four lines

Represent each distinct complete line by an integer token. Insert every suffix of the token sequence into a trie. A trie node at depth $r$ represents one particular group of $r$ lines; its occurrence count is exactly the number of starting positions for that group. When the count first reaches 2 and $r\ge4$, record that node's first starting position and length. The node is recorded only once.

This enumerates every repeated group of length at least 4, including repeated shorter subgroups of a longer match. Occurrences may overlap: for five identical lines, the four-line group starts at both positions 1 and 2. Insertion uses $O(N^2)$ time and nodes after line tokenization; printing can require more time because the total number of output lines can be $O(N^3)$. The text of each distinct group is printed once.

### Complete program

```python
from collections import Counter
from itertools import combinations, zip_longest
import sys


def read_lines(filename):
    # Remove line separators only; preserve spaces, tabs and empty lines.
    with open(filename, encoding='utf-8', newline=None) as stream:
        return [line[:-1] if line.endswith('\n') else line for line in stream]


def adjacent_duplicates(lines):
    seen = set()
    result = []
    for first, second in zip(lines, lines[1:]):
        if first == second and first not in seen:
            seen.add(first)
            result.append(first)
    return result


def duplicate_lines(lines):
    counts = Counter(lines)
    return [line for line in counts if counts[line] > 1]


def padded_distance(first, second):
    return sum(a != b for a, b in zip_longest(first, second, fillvalue=' '))


def edit_distance(first, second):
    previous = list(range(len(second) + 1))
    for i, a in enumerate(first, 1):
        current = [i]
        for j, b in enumerate(second, 1):
            current.append(min(previous[j] + 1, current[j-1] + 1,
                               previous[j-1] + (a != b)))
        previous = current
    return previous[-1]


def similar_pairs(lines, distance, threshold):
    eligible = [(i, line) for i, line in enumerate(lines, 1) if len(line) >= 20]
    for (i, first), (j, second) in combinations(eligible, 2):
        if first != second and distance(first, second) < threshold:
            yield i, j, first, second


def repeated_groups(lines):
    # A token represents one complete line, including all its whitespace.
    ids = {}
    tokens = [ids.setdefault(line, len(ids)) for line in lines]
    # All occurrences of each substring of the current length share a trie node.
    # node = [children, occurrence count, first start index]
    root = [{}, 0, 0]
    repeated = []
    for start in range(len(lines)):
        node = root
        for end in range(start, len(lines)):
            token = tokens[end]
            if token not in node[0]:
                node[0][token] = [{}, 0, start]
            node = node[0][token]
            node[1] += 1
            length = end - start + 1
            if length >= 4 and node[1] == 2:
                repeated.append((node[2], length))
    # One entry per distinct line group, ordered by first occurrence then length.
    for start, length in sorted(repeated):
        yield start + 1, lines[start:start+length]


def solve(part, lines):
    if part == 1:
        print(sum(line.count(';') for line in lines))
    elif part == 2:
        for i, line in enumerate(lines, 1):
            if 'main' in line:
                print(f'{i}: {line}')
    elif part in (3, 4):
        result = adjacent_duplicates(lines) if part == 3 else duplicate_lines(lines)
        for line in result:
            print(line)
        if part == 4:
            print(len(result))
    elif part in (5, 6):
        distance = padded_distance if part == 5 else edit_distance
        count = 0
        for i, j, first, second in similar_pairs(lines, distance, 5 if part == 5 else 4):
            print(f'{i}: {first}\n{j}: {second}\n')
            count += 1
        print(count)
    elif part == 7:
        for first, group in repeated_groups(lines):
            print(f'--- {len(group)} lines, first occurrence at {first} ---')
            print('\n'.join(group))


if __name__ == '__main__':
    part = int(sys.argv[1])
    if not 1 <= part <= 7:
        raise SystemExit('part must be from 1 to 7')
    solve(part, read_lines(sys.argv[2] if len(sys.argv) > 2 else 'program.txt'))
```
