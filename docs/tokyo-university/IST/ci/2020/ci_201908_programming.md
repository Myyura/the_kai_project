---
sidebar_label: 2019年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Dynamic-Programming.Optimal-Compression-Encoding
  - Computer-Science.Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff), [FunTotal](https://github.com/totalhuang), [itsuitsuki](https://github.com/itsuitsuki), 祭音Myyura

## **Description**

[原題](https://www.i.u-tokyo.ac.jp/edu/course/ci/2019-8-programming.pdf)
Answer the following questions by writing programs if necessary. Store the programs in the USB flash drive before the examination ends.

(1) We store binary data in a text file. We split binary data to 6-bit chunks and store them in the file after replacing every 6-bit number, `000000` to `111111`, with a character A, B, ..., Z, a, b, ..., z, 0, 1, ..., 9, @, or #, respectively, in ascending order.
For example, we replace the 6-bit number with A when it is `000000`, B when it is `000001`, C when it is `000010`, H when it is `000111`, @ when it is `111110`, and # when it is `111111`. When the binary data is a bit sequence:

```text
000001000111000010111111
```

we store `BHC#` in the text file. The bit length of the binary data is a multiple of $6$.

The text file `data1.txt` stores binary data in the format shown above. Obtain the bit sequence (11 bits) from the 310th bit to the 320th bit of that binary data, and write the sequence on the answer sheet. The left-most bit of the binary data is the 0th bit.

(2) We store binary data in a file after compressing them.
The program restoring the compressed file reads every byte (8 bits) from the beginning of the compressed file, and appends data to the end of the restored file as follows:

- Append the read byte as it is unless the byte is 0,
- When the byte is 0, read the following two bytes as two 8-bit unsigned integers from the file. Let them $p$ and $d$. It always holds: $256 > p \geq d \geq 0$.
  - When $d = 0$, append 1-byte binary data `0` no matter what the value of $p$ is.
  - Otherwise, append a copy of the sub-sequence of bytes from the $p$-th byte to the $(p-d+1)$-th byte counting from the end of the file already restored so far. The byte last appended to the restored file is the first byte ($p=1$).

For example, when the bytes stored in the compressed binary file are:

```text
41 42 43 44 45 46 47 00 06 05 48
```

in the hexadecimal form, the restored file stores the following bytes:

```text
41 42 43 44 45 46 47 42 43 44 45 46 48
```

Write the program that restores a compressed binary file by the method shown above, and prints the size (bytes) of the file after the restoration.
Restore the compressed binary files `data2a.bin`, `data2b.bin`, and `data2c.bin` by that program, and write their sizes (bytes) after the restoration down on the answer sheet.
After the restoration, name the files `data2a.txt`, `data2b.tif`, and `data2c.txt`, respectively. Store them in the USB flash drive.

(3) Write the program that compresses the given binary file and prints the size (bytes) of the file after the compression.
The compressed file is restored by the program written for (2).
The program compresses the file to be as small as possible.
Compress the binary file `data3a.txt`, `data3b.png`, and `data3c.txt` by that program, and write their sizes after the compression down on the answer sheet.
After the compression, name the files `data3a.bin`, `data3b.bin`, `data3c.bin`, respectively. Store them in the USB flash drive.

(4) We encrypt English text by a simple substitution cipher and store the encrypted text in a file.
The text consists of lower-case letters `a` to `z`, periods `.`, and/or white space characters.
A sentence ends with a period.
A simple substitution cipher encrypts the text by replacing each letter with another fixed letter (lower-case alphabets, a period, or a white space character), which may be the same letter.

The text file `data4.txt` stores a cipher text encrypted by this method. Decrypt `data4.txt` by referring to `data4dict.txt` (white-space separated), which lists all the words included in the plaintext obtained by decrypting `data4.txt`, and write the first sentence of the obtained plaintext down on the answer sheet.

(5) We encrypt a binary file. We split the contents of the binary file to 4-byte chunks and encrypt each chunk as follows.
The size (bytes) of the binary file is a multiple of $4$. First, read each byte of the four bytes as an $8$-bit unsigned integer and let them $b_0, b_1, b_2, b_3$, respectively, from the beginning. Then, let:

$$
m = \sum_{k=0}^3 2^{8(3-k)} b_k
$$

Let $e = 551263368336670859257571$, $n = 3858843578360632069557337$, and

$$
c = m^e \mod n
$$

Here, $n$ is the product of secret prime numbers $p$ and $q$. $\mod n$ expresses modulo $n$. Note that it holds:

$$
(x \times y) \mod n = ((x \mod n) \times (y \mod n)) \mod n
$$

The encrypted file is a text file storing the decimal numbers $c$ computed from the 4-byte chunks in the same order. The character strings expressing $c$ are separated by a white space character.

For example, when the original binary file stores the following bytes:

```text
41 42 43 44 45 46 47 48
```

in the hexadecimal form, the encrypted file is a text file storing the following text:

```text
3678294059377362389066827 3206045550022053639901108
```

The decryption uses a secret integer $d$. For this $d$, it holds:

$$
m = c^d \mod n
$$

This encryption is cracked if the secret integer is guessed. Now, we know that it holds:

$$
e \times d = (p-1)(q-1) + 1
$$

Decrypt `data5.txt` by using this fact. The decrypted data is UTF-8 text. Write the text down on the answer sheet.

### 题目描述

必要时编程回答，并在考试结束前把程序保存到 U 盘。

1. 把二进制数据每 6 位分组，按数值从小到大把 `000000`～`111111` 依次替换为 `A`～`Z`、`a`～`z`、`0`～`9`、`@`、`#` 后存入文本文件。例如 `000001000111000010111111` 存为 `BHC#`。原数据位数保证是 6 的倍数。`data1.txt` 按此格式存储数据；以最左位为第 0 位，求原二进制数据第 310～320 位（共 11 位），写在答题纸上。
2. 设计如下压缩格式的解压程序。逐字节读取压缩文件：
   - 读到非零字节时原样追加到已还原文件；
   - 读到 0 时，再读两个 8 位无符号整数 $p,d$，且 $256>p\ge d\ge0$。
     - 若 $d=0$，无论 $p$ 为何，追加一个值为 0 的字节；
     - 否则，从当前已还原文件末尾反向计数，把第 $p$ 个字节至第 $p-d+1$ 个字节对应的、按原顺序连续的 $d$ 字节副本追加；最新追加字节计作反向第 1 个。

   例如压缩字节
   ```text
   41 42 43 44 45 46 47 00 06 05 48
   ```
   （十六进制）还原为
   ```text
   41 42 43 44 45 46 47 42 43 44 45 46 48
   ```
   程序还须输出还原后字节数。分别还原 `data2a.bin`、`data2b.bin`、`data2c.bin`，把大小写在答题纸上，并把输出依次命名为 `data2a.txt`、`data2b.tif`、`data2c.txt` 保存到 U 盘。
3. 编写与第 2 问解压器兼容的压缩程序，并输出压缩后大小；要求生成尽可能小的压缩文件。分别压缩 `data3a.txt`、`data3b.png`、`data3c.txt`，把大小写在答题纸上，输出依次命名为 `data3a.bin`、`data3b.bin`、`data3c.bin` 并保存到 U 盘。
4. 用简单替换密码加密英文文本。文本只含小写 `a`～`z`、句点和空白，句点结束一句；每种字符都被替换为某个固定的小写字母、句点或空白，也允许映射为自身。`data4.txt` 是密文，`data4dict.txt` 以空白分隔列出了明文中的全部单词。参考词典解密，并把明文第一句写在答题纸上。
5. 加密二进制文件。文件大小是 4 的倍数；每 4 字节按顺序读为 8 位无符号数 $b_0,b_1,b_2,b_3$，组成

   $$
   m=\sum_{k=0}^3 2^{8(3-k)}b_k.
   $$

   给定

   $$
   e=551263368336670859257571,\qquad
   n=3858843578360632069557337,
   $$

   计算 $c=m^e\bmod n$。其中 $n$ 是秘密素数 $p,q$ 的乘积，可使用

   $$
   (xy)\bmod n=((x\bmod n)(y\bmod n))\bmod n.
   $$

   加密文件是按块顺序写出各十进制 $c$、以空白分隔的文本。原字节
   ```text
   41 42 43 44 45 46 47 48
   ```
   对应密文
   ```text
   3678294059377362389066827 3206045550022053639901108
   ```
   解密秘密整数 $d$ 满足

   $$
   m=c^d\bmod n,\qquad ed=(p-1)(q-1)+1.
   $$

   利用这些关系破解并解密 `data5.txt`；明文是 UTF-8 文本，把内容写在答题纸上。

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2020-Summer) for the sample data files.

### (1)
#### tomfluff's solution

```python
# The helper below reads packed bytes; the actual file uses the 64-character
# text encoding, so main decodes six bits per character directly.
class BitsRead(object):
    def __init__(self, f) -> None:
        self._file = f
    
    def read(self, n, l):
        if n < 0 or l < 0:
            raise ValueError("bit offset and length must be non-negative")
        bit_offset = n % 8
        byte_count = (bit_offset + l + 7) // 8
        self._file.seek(n // 8)
        raw = self._file.read(byte_count)
        if len(raw) * 8 < bit_offset + l:
            raise EOFError("not enough bits")
        unused_low_bits = len(raw) * 8 - bit_offset - l
        return (int.from_bytes(raw, 'big') >> unused_low_bits) & ((1 << l) - 1)



def main():
    n = 310 # index (from)
    l = 11 # length (bits)
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#'
    with open('2020-Summer/data1.txt') as f:
        encoded = f.read().strip()
    bits = ''.join(f'{alphabet.index(ch):06b}' for ch in encoded)
    print(bits[n:n+l])
                

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
#include <bits/stdc++.h>
using namespace std;
int trans(char ch) { // map char to int
    if ('A' <= ch && ch <= 'Z') return ch - 'A';
    if ('a' <= ch && ch <= 'z') return 26 + ch - 'a';
    if (isdigit(ch)) return 26 + 26 + ch - '0';
    if (ch == '@') return 26 + 26 + 10;
    return 26 + 26 + 10 + 1;
}
void solve() {
    string str; cin >> str;
    vector<int> vec;
    for (auto ch : str) {
        int num = trans(ch);
        stack<int> stk;
        for (int i = 0; i < 6; i++) { // change int to binary string
            stk.push(num % 2);
            num /= 2;
        }
        while (!stk.empty())
            vec.push_back(stk.top()), stk.pop();
    }
    for (int i = 310; i <= 320; i++) // output the needed bytes
        cout << vec[i];
    cout << "\n";
}
signed main() {
    if (freopen("data1.txt", "r", stdin) == NULL)
        assert(0);
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

The requested bit sequence is `10111111110`.

### (2)
#### tomfluff's solution

```python
# Here p is the backward distance to the first copied byte.  The source slice
# in ordinary zero-based indexing is restored[len(restored)-p : ... + d].

bZERO = (0).to_bytes(1,'big')

def restore(input_name, output_name):
    w_buff = []
    with open('2020-Summer/' + input_name, 'rb') as f:
        EOF = False
        while not EOF:
            r = f.read(1)
            if r == b'':
                EOF = True
                continue

            if r != bZERO:
                w_buff.append(r)
            else:
                pair = f.read(2)
                if len(pair) != 2:
                    raise ValueError('truncated escape')
                p, d = pair
                if p < d or (d > 0 and p > len(w_buff)):
                    raise ValueError('invalid back-reference')
                if d == 0:
                    w_buff.append(bZERO)
                else:
                    start = len(w_buff) - p
                    for i in range(start, start + d):
                        w_buff.append(w_buff[i])
    
    with open('2020-Summer/' + output_name, 'wb') as f_out:
        for b in w_buff:
            f_out.write(b)
    print(input_name, len(w_buff))

def main():
    for input_name, output_name in [
        ('data2a.bin', 'data2a.txt'),
        ('data2b.bin', 'data2b.tif'),
        ('data2c.bin', 'data2c.txt'),
    ]:
        restore(input_name, output_name)

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
#include <bits/stdc++.h>
using namespace std;

/*
INPUT  data2.bin:
29 2a 2b 2c 2d 2e 2f 00	06 05 00 00 00 00 08 04 30

OUTPUT  data2.txt:
29 2a 2b 2c 2d 2e 2f 2a 2b 2c 2d 2e 00 2e 2f 2a 2b 30
total: 18 bytes
*/
void solve(const string& input_name, const string& output_name) {
    ifstream fin(input_name, ios::in | ios::binary);
    ofstream fout(output_name, ios::out | ios::binary);
    if (!fin.is_open()) assert(0);
    vector<unsigned char> vec;
    char num;
    while (fin.read((char*) &num, sizeof(char))) { // input data
        vec.push_back(static_cast<unsigned char>(num));
    }
    vector<char> res;
    for (int i = 0; i < vec.size(); i++) {
        if (vec[i] != 0) {
            // if byte not equal to 0, append directly
            res.push_back(vec[i]);
            // cout << "Writing b'" << (char)vec[i] << "'\n";
        }
        else {
            if (i + 2 >= vec.size()) throw runtime_error("truncated escape");
            int p = vec[i + 1], d = vec[i + 2];
            i += 2;
            if (p < d || (d > 0 && p > (int)res.size()))
                throw runtime_error("invalid back-reference");
            // cout << "p = " << p << " " << "d = " << d << "\n";
            if (d == 0) res.push_back(0); // if d = 0, append 0
            else {
                int sz = res.size();
                // copy the needed range bytes from restoration part
                for (int j = sz - p; j < sz - p + d; j++) {
                    res.push_back(res[j]);
                    // cout << "Writing b'" << (char)res[j] << "'\n";
                }
            }
        } 
    }
    for (auto ch : res) {
        fout.write((char*)&ch, sizeof(ch));
    }
    cout << input_name << ": " << res.size() << "\n";
}
signed main() {
    solve("data2a.bin", "data2a.txt");
    solve("data2b.bin", "data2b.tif");
    solve("data2c.bin", "data2c.txt");
    return 0;
}
```

For the provided `data2.bin`, the restored size is 18 bytes.


### (3)

#### Analysis (aux by Gemini 3 Pro)

编写一个程序，将给定的二进制文件（data3a.txt, data3b.png, data3c.txt）进行**压缩**，并使其压缩后的大小（字节数）**尽可能小**。

**约束条件**：
压缩后的文件必须能被**(2)**中描述的解压程序正确还原。这意味着你需要根据解压逻辑反推出压缩格式。

解压程序逐字节读取压缩文件，规则如下。设原数据为 `data` （这同时也可以表示还原出来的partial数组），压缩为 `comp`：

1.  **非 `00` 字节**：直接作为字面量（Literal）追加到还原数据中。
    *   *代价*：1 字节。
    *   *条件*：原始数据字节不为 `00`。
2.  **`00` 字节（转义符）**：表示接下来的两个字节是参数 $p$ 和 $d$。
    *   即`comp`中的 `00 p d`。
    *   *代价*：3 字节。
    *   *参数限制*：$p$ 和 $d$ 均为 8 位无符号整数（0-255），且必须满足 $p \ge d$。
    *   **情况 A ($d=0$)**：
        *   表示追加一个单字节字面量 `00`。
        *   即 `00 p 00` 用于编码原始数据中的 `00`。
        *   **压缩时**选择的话就把当前的一个 `00` 给转成 `00 00 00`
    *   **情况 B ($d > 0$)**：
        *   表示**复制**操作。
        *   解压的时候从已还原数据的末尾向前数第 $p$ 个字节开始，复制长度为 $d$ 的字节序列。也就是
        *   *限制*：$p \ge d$。因此源数据区间完全位于当前写入点之前，不与写入区间重叠。
        *   *窗口大小*：由于 $p$ 是 8 位，$p \le 255$，所以只能引用最近 255 个字节内的数据。
        *   因为解压的时候碰到这里，向后展开 `d` 位，所以**压缩时**选择复制，就是从当前的 `data[i]` 往右在`data[:i]`(不包含`i`) 里重合过的 `d` 位数据，也就是`data[i:i+d]=data[i-p:i-p+d]` 共`d`位。接下来**压缩时**下一步直接跳到`data[i+d]`.

**一个贪心的思路**
如果对每个 `data[i]` 都贪心地选择当下最长的匹配，可能阻碍更优的后续选择。例如考虑连续10个 `01`：

```
01 01 01 01 01 01 01 01 01 01
```

如果用贪心思路来做的话，会在 `data[4]` 也就是第五个`01`压缩`data[4,5,6,7]`为`00 04 04`，然后`data[8,9]`由于后面没有了就没法压缩。

这样会获得

```
01 01 01 01 00 04 04 01 01
```

长度为9,但是如果忍到 `data[5]` 再压缩的话可以有

```
01 01 01 01 01 00 05 05
```

长度为8

所有可用匹配都可作为转移，不需预先断定哪个局部选择最优。

因此我们考虑dp:

**DP的思路**

设`dp[i]`为 `data[0,1,..,i-1]` (长度为`i`的前缀) 的最短压缩长度。`path[i]`存放回溯信息：长度为`i`前缀最短压缩长度对应的最后一步。

> 如果`dp[i]`存的是 `data[0,..,i]` 包含`i`的最短压缩长度的话，会发现其实遍历到data[i]对应的转移是`0..i-1`的最短压缩长度到后面`0..i`, `0..i+d`的case的更新；这意味着`dp[i], dp[i+d]`需要靠着`dp[i-1]`之类的来更新

我们从`dp[i]`出发更新后续步骤，而不是像普通的dp那样从前面步骤更新自身。这是因为要更新`dp[i+1],dp[i+d]`对于多个`d`，而锚定一个`i`更新是比较方便的。如果从`dp[i-d]`更新`dp[i]`的话还需要以`data[:i-d]`来搜索重合子串。



对于 `dp[i]`，如果选择复制，搜索 $1\le p\le255$ 及 $1\le d\le p$；当 `data[i-p:i-p+d] == data[i:i+d]` 时，用 `dp[i]+3` 更新 `dp[i+d]`。长度不超过3的匹配在含零字节时也可能更优，不能排除。

如果不用复制而用字面量`data[i]`，如果`data[i]`是0，压缩中加3个字节，否则是加1个，那么`dp[i+1]=min(dp[i]+(3 or 1), dp[i+1])`;如果成功更新那么`path[i+1]=(0,1) or (0,0) when data is 0`



初始化为`dp[0]=0`求`dp[n]`



回溯时以 $p=0$ 区分字面量，以 $p>0$ 表示复制；复制长度也可能为1。逐步回到 `path[0]` 即可恢复最优编码。

对每个位置和后向距离维护最长公共前缀，即可在 $O(256n)$ 时间、$O(n)$ 空间内完成动态规划。

#### itsuitsuki's solution

```py
def compress(data): # inp is list or bytes
    n = len(data)
    best_copy = [(0, 0)] * n
    next_lcp = [0] * 256
    for i in range(n - 1, -1, -1):
        current_lcp = [0] * 256
        best_p = best_d = 0
        for p in range(1, min(i, 255) + 1):
            if data[i-p] == data[i]:
                current_lcp[p] = 1 + next_lcp[p]
            d = min(current_lcp[p], p, 255)
            if d > best_d:
                best_p, best_d = p, d
        best_copy[i] = (best_p, best_d)
        next_lcp = current_lcp

    dp = [0] + [float('inf')]*n
    path = [(-1,-1)] * (n+1)
    for i in range(n):
        literal_cost = 1 if data[i] != 0 else 3
        if dp[i] + literal_cost < dp[i+1]:
            dp[i+1] = dp[i] + literal_cost
            # literal
            path[i+1]=(0,1) if data[i]!=0 else (0,0)
        p, max_d = best_copy[i]
        for d in range(1, max_d + 1):
            if dp[i]+3 < dp[i+d]:
                dp[i+d]=dp[i]+3
                path[i+d]=(p,d)
    # print(dp)
    # print(path)
    # backtrack
    parts = []
    ptr = n
    while ptr > 0:
        p, d = path[ptr]
        if p == 0:
            parts.append([data[ptr-1]] if d == 1 else [0, 0, 0])
            ptr -= 1
        else:
            parts.append([0, p, d])
            ptr -= d
    return [byte for part in reversed(parts) for byte in part]

filenames = ['data3a.txt', 'data3b.png', 'data3c.txt']
for filename in filenames:
    with open(filename, 'rb') as f:
        to_compress = f.read()
        compressed = compress(to_compress)
        print(filename, len(compressed))
    with open(filename.split('.')[0]+'.bin','wb') as wf:
        wf.write(bytes(compressed))
```




#### tomfluff's solution

```python
bZERO = (0).to_bytes(1,'big')

def get_max_match(buff, i):
    max_p = 0
    max_d = 0
    for p in range(1, min(i, 255) + 1):
        d = 0
        while d < p and i + d < len(buff) and buff[i-p+d] == buff[i+d]:
            d += 1
        if d > max_d:
            max_p, max_d = p, d
    return max_p, max_d

def compress_buffer(buff):
    data = [int.from_bytes(x, 'big') for x in buff]
    n = len(data)
    best_copy = [(0, 0)] * n
    next_lcp = [0] * 256
    for i in range(n - 1, -1, -1):
        current_lcp = [0] * 256
        best_p = best_d = 0
        for p in range(1, min(i, 255) + 1):
            if data[i-p] == data[i]:
                current_lcp[p] = 1 + next_lcp[p]
            d = min(current_lcp[p], p, 255)
            if d > best_d:
                best_p, best_d = p, d
        best_copy[i] = (best_p, best_d)
        next_lcp = current_lcp

    dp = [0] + [float('inf')] * n
    path = [None] * (n + 1)
    for i in range(n):
        cost = 1 if data[i] else 3
        if dp[i] + cost < dp[i + 1]:
            dp[i + 1] = dp[i] + cost
            path[i + 1] = (0, 1 if data[i] else 0)
        p, max_d = best_copy[i]
        for d in range(1, max_d + 1):
            if dp[i] + 3 < dp[i+d]:
                dp[i+d] = dp[i] + 3
                path[i+d] = (p, d)

    parts = []
    i = n
    while i:
        p, d = path[i]
        if p == 0:
            parts.append([data[i-1]] if d else [0, 0, 0])
            i -= 1
        else:
            parts.append([0, p, d])
            i -= d
    return [x.to_bytes(1, 'big') for part in reversed(parts) for x in part]

def main():
    for input_name, output_name in [
        ('data3a.txt', 'data3a.bin'),
        ('data3b.png', 'data3b.bin'),
        ('data3c.txt', 'data3c.bin'),
    ]:
        with open('2020-Summer/' + input_name, 'rb') as f:
            in_buff = [bytes([value]) for value in f.read()]
        comp_buff = compress_buffer(in_buff)
        with open('2020-Summer/' + output_name, 'wb') as f_out:
            for b in comp_buff:
                f_out.write(b)
        print(input_name, len(comp_buff))

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:

```c++
#include <bits/stdc++.h>
using namespace std;
/*
长度不超过3的匹配在含0时也可能更优；而且最长匹配贪心不保证全局最短。下面用前缀动态规划，hack 数据说明了必须考虑短匹配。
*/
/*
INPUT  data2.txt:
29 2a 2b 2c 2d 2e 2f 2a 2b 2c 2d 2e 00 2e 2f 2a 2b 30

OUTPUT  data2.bin:
29 2a 2b 2c 2d 2e 2f 00	06 05 00 00 00 00 08 04 30


HACK!
INPUT data3b.txt:
29 00 2a 29 00 2a

OUPUT:
RIGHT:   29 00 00 00 2a 00 03 03  (shorter)
WRONG:   29 00 00 00 2a 29 00 00 00 2a
*/
void solve(const string& input_name, const string& output_name) {
    ifstream fin(input_name, ios::in | ios::binary);
    ofstream fout(output_name, ios::out | ios::binary);
    vector<int> vec, res;
    char num;
    while (fin.read((char*) &num, sizeof(num)))
        vec.push_back(static_cast<unsigned char>(num));

    int n = vec.size();
    const int INF = 1e9;
    struct Prev { int p = -1, d = -1; };
    vector<pair<int, int>> best_copy(n);
    vector<int> next_lcp(256), current_lcp(256);
    for (int i = n - 1; i >= 0; i--) {
        fill(current_lcp.begin(), current_lcp.end(), 0);
        int best_p = 0, best_d = 0;
        for (int p = 1; p <= min(i, 255); p++) {
            if (vec[i - p] == vec[i]) current_lcp[p] = 1 + next_lcp[p];
            int d = min(current_lcp[p], p);
            if (d > best_d) best_p = p, best_d = d;
        }
        best_copy[i] = {best_p, best_d};
        swap(next_lcp, current_lcp);
    }
    vector<int> dp(n + 1, INF);
    vector<Prev> pre(n + 1);
    dp[0] = 0;
    for (int i = 0; i < n; i++) {
        int literal_cost = vec[i] == 0 ? 3 : 1;
        if (dp[i] + literal_cost < dp[i + 1]) {
            dp[i + 1] = dp[i] + literal_cost;
            pre[i + 1] = {0, vec[i] == 0 ? 0 : 1};
        }
        auto [p, max_d] = best_copy[i];
        for (int d = 1; d <= max_d; d++) {
            if (dp[i] + 3 < dp[i + d]) {
                dp[i + d] = dp[i] + 3;
                pre[i + d] = {p, d};
            }
        }
    }

    vector<vector<int>> parts;
    for (int i = n; i > 0; ) {
        auto [p, d] = pre[i];
        if (p == 0) {
            parts.push_back(d == 0 ? vector<int>{0, 0, 0} : vector<int>{vec[i - 1]});
            i--;
        } else {
            parts.push_back({0, p, d});
            i -= d;
        }
    }
    reverse(parts.begin(), parts.end());
    for (auto &part : parts)
        res.insert(res.end(), part.begin(), part.end());
    for (auto c : res) {
        char ch = c;
        fout.write((char*) &ch, sizeof(ch));
    }
    cout << input_name << ": " << res.size() << "\n";
}
signed main() {
    solve("data3a.txt", "data3a.bin");
    solve("data3b.png", "data3b.bin");
    solve("data3c.txt", "data3c.bin");
    return 0;
}
```



### (4)

Under the usual one-to-one substitution rule, equal ciphertext symbols must decode to equal plaintext symbols, and different symbols must decode to different symbols. Enumerate the ciphertext symbols for the space and period (allowing either to be absent), split into encrypted words, and match each word against dictionary words with the same repeated-letter pattern. A backtracking search chooses the word with the fewest consistent candidates and maintains both directions of the character mapping. Finally, verify every decoded word and that the dictionary's word set is exactly the set used in the plaintext. Return all compatible plaintexts if there is more than one.

The program preserves ciphertext whitespace, because a space can encode an ordinary letter. Run `python substitution.py data4.txt data4dict.txt`.

```python
from pathlib import Path
import re
import sys


def pattern(word):
    numbers = {}
    return tuple(numbers.setdefault(ch, len(numbers)) for ch in word)


def decrypt_with_dictionary(ciphertext, dictionary):
    words = set(dictionary)
    by_pattern = {}
    for word in words:
        by_pattern.setdefault(pattern(word), []).append(word)
    answers = set()
    symbols = sorted(set(ciphertext))

    def extend(mapping, inverse, encoded, plain):
        new_mapping, new_inverse = mapping.copy(), inverse.copy()
        for a, b in zip(encoded, plain):
            if a in new_mapping and new_mapping[a] != b:
                return None
            if b in new_inverse and new_inverse[b] != a:
                return None
            new_mapping[a], new_inverse[b] = b, a
        return new_mapping, new_inverse

    for space_symbol in [None] + symbols:
        for period_symbol in [None] + symbols:
            if period_symbol is not None and period_symbol == space_symbol:
                continue
            mapping = {} if space_symbol is None else {space_symbol: ' '}
            if period_symbol is not None:
                mapping[period_symbol] = '.'
            inverse = {v: k for k, v in mapping.items()}
            separators = (space_symbol or '') + (period_symbol or '')
            parts = re.split('[' + re.escape(separators) + ']', ciphertext) if separators else [ciphertext]
            encoded_words = set(filter(None, parts))
            candidates = {w: by_pattern.get(pattern(w), [])
                          for w in encoded_words}
            if any(not values for values in candidates.values()):
                continue

            def search(remaining, forward, backward):
                if not remaining:
                    plain = ''.join(forward[ch] for ch in ciphertext)
                    if set(plain.replace('.', ' ').split()) == words:
                        answers.add(plain)
                    return
                choices = []
                for word in remaining:
                    valid = []
                    for candidate in candidates[word]:
                        result = extend(forward, backward, word, candidate)
                        if result is not None:
                            valid.append(result)
                    if not valid:
                        return
                    choices.append((len(valid), word, valid))
                _, word, valid = min(choices, key=lambda item: item[0])
                for next_forward, next_backward in valid:
                    search(remaining - {word}, next_forward, next_backward)

            search(encoded_words, mapping, inverse)
    return sorted(answers)


if __name__ == '__main__':
    cipher = Path(sys.argv[1]).read_text(encoding='utf-8')
    dictionary = Path(sys.argv[2]).read_text(encoding='utf-8').split()
    for answer in decrypt_with_dictionary(cipher, dictionary):
        first = answer.split('.', 1)[0]
        print(first + ('.' if '.' in answer else ''))
```

For the linked sample files, one compatible plaintext is:

```text
i have no idea what is your problem so please help me
```

### (5)

Since $ed=(p-1)(q-1)+1=n-p-q+2<n$, we have

$$
1\le d\le\left\lfloor\frac{n-1}{e}\right\rfloor=7.
$$

For each candidate, compute $S=n-ed+2=p+q$. The discriminant $S^2-4n$ must be a nonnegative perfect square, giving $p,q=(S\pm\sqrt{S^2-4n})/2$. Only $d=7$ passes, with

$$
p=2087560548023,\qquad q=1848494206319.
$$

The two example blocks decrypt to the bytes `41 42 43 44 45 46 47 48`, or `ABCDEFGH`. The following complete program recovers the parameters and decrypts the given file using modular exponentiation. Fixed four-byte output per block preserves leading zero bytes.

#### tomfluff / FunTotal

```python
from math import isqrt
from pathlib import Path
import sys


def recover_parameters(n, e):
    for d in range(1, (n - 1) // e + 1):
        total = n - e * d + 2
        discriminant = total * total - 4 * n
        if discriminant < 0:
            continue
        root = isqrt(discriminant)
        if root * root != discriminant or (total + root) % 2:
            continue
        p, q = (total + root) // 2, (total - root) // 2
        if p > 1 and q > 1 and p * q == n:
            return p, q, d
    raise ValueError('no candidate satisfies the stated relation')


def decrypt_blocks(ciphertext, n, d):
    return b''.join(pow(c, d, n).to_bytes(4, 'big') for c in ciphertext)


if __name__ == '__main__':
    n = 3858843578360632069557337
    e = 551263368336670859257571
    p, q, d = recover_parameters(n, e)
    assert e * d == (p - 1) * (q - 1) + 1
    filename = sys.argv[1] if len(sys.argv) > 1 else 'data5.txt'
    ciphertext = map(int, Path(filename).read_text().split())
    plaintext = decrypt_blocks(ciphertext, n, d)
    Path('data5ans.txt').write_bytes(plaintext)
    print(plaintext.decode('utf-8'))
```
