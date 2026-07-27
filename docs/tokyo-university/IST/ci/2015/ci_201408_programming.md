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

#### 考点

- **文件输入输出与字符串处理**：逐字符、逐行读取文本，保留行号和首次出现顺序，并正确处理相邻与非相邻重复。
- **代码克隆检测**：分别按单行完全相同、逐位置差异阈值和连续多行块识别不同强度的重复代码。
- **最小编辑距离**：用动态规划计算插入、删除、替换代价均为 1 的行间距离，并排除完全相同行。
