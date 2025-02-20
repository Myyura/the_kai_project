---
comments: false
title: 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 プログラミング
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2019年8月実施 プログラミング

## **Author**
[tomfluff](https://github.com/tomfluff), [FunTotal](https://github.com/FunTotal)

## **Description**
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
Restore the compressed binary files `data2.bin`, `data2b.bin`, and `data2c.bin` by that program, and write their sizes (bytes) after the restoration down on the answer sheet.
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

## **Kai**
Please click [here](https://github.com/tomfluff/UTokyo_CI_Entrance_Exam/tree/main/2020-Summer) for the sample data files.

### (1)
#### tomfluff's solution

```python
# I thought that the file is in bits, but it seems like it is actually test
# ABC... etc, based on the definition in the question.
# So this code is not relevant to the question
class BitsRead(object):
    def __init__(self, f) -> None:
        self._file = f
    
    def read(self, n, l):
        k = l
        print(f"Readinng {n//8+l//8+min(l%8,1)} bytes...")
        rd = self._file.read(n//8+l//8+min(l%8,1))
        print(len(rd))
        # from first byte
        print(f"Starting with {8-n%8} bits from byte {n//8} shift {n%8}, using mask {bin(2**(8-n%8)-1)}")
        b = rd[n//8-1] & (2**(8-n%8)-1)
        k -= 8-n%8
        if k < 0:
            print(f"Need to trim result by shifting {abs(k)} bits")
            b = b >> abs(k)
            return b
        # middle part
        rs, re = n//8+1, n//8+k//8+1
        for i in range(rs,re):
            print(f"Adding 8 bits using byte {i}")
            b = b << 8
            b = b | rd[i-1]
            k -= 8
        # from end byte
        if k%8 != 0:
            print(f"Adding additional final {k%8} bits from byte {re} by shifting {8-k%8} bits")
            b = b << k%8
            b = b | (rd[re-1] >> (8-k%8))
        return b



def main():
    n = 310 # index (from)
    l = 11 # length (bits)
    bts = []
    with open('2020-Summer/data1.txt','rb') as f:
        if False:
            br = BitsRead(f)
            rd = br.read(n,l)
            print(bin(rd))
        else:
            r = f.read(1)
            rb = 0
            while r != b'':
                if r >= b'A' and r <= b'z':
                    rb = (int.from_bytes(r, 'big') - ord('A')).to_bytes(1,'big')
                elif r >= b'0' and r <= b'9':
                    rb = (int.from_bytes(r, 'big') - ord('0')).to_bytes(1,'big')
                elif r == b'@':
                    rb = (2**6-2).to_bytes(1,'big')
                else:
                    rb = (2**6-1).to_bytes(1,'big')
                bts.append(rb)
                r = f.read(1)
        for _b in bts[n//8:n//8+l//6+min(l%6,1)+1]:
            print(f"{int.from_bytes(_b,'big'):06b}",end='')
        print(f"\n{' '*(n%6)}^{'-'*(l-1)}")
                

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

### (2)
#### tomfluff's solution

```python
# Note: They have a mistake in the fefinitions of the question, they say repeat in decending order.
# But based on the logic of the next question and the example they give, it's asceding order.
# so instead of p -> ... -> p-d+1 it should be p-d -> ... -> p

bZERO = (0).to_bytes(1,'big')

def main():
    w_buff = []
    with open('2020-Summer/data2.bin','rb') as f:
        EOF = False
        while not EOF:
            r = f.read(1)
            if r == b'':
                EOF = True
                continue

            if r != bZERO:
                print(f"Writing {r}")
                w_buff.append(r)
            else:
                p = int.from_bytes(f.read(1),'big')
                d = int.from_bytes(f.read(1),'big')
                print(f"Zero detected, p={p}, d={d}")
                if d == 0:
                    w_buff.append(bZERO)
                else:
                    for i in range(p-d,p):
                        w_buff.append(w_buff[i])
                        print(f"Writing {w_buff[i]}")
    
    with open('2020-Summer/data2_s.txt', 'wb') as f_out:
        for b in w_buff:
            f_out.write(b)

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

C++ solution:
```c++
#include <bits/stdc++.h>
using namespace std;
/*
NOTE:
楼上怀疑题目表述错误，但是结合了LZ77压缩思想，我觉得题目表述没有问题，p表示的就是从右往左的距离，只是复制的时候还是从左往右, 按这样的话楼上的py代码复制部分就有问题。
*/
/*
INPUT  data2.bin:
29 2a 2b 2c 2d 2e 2f 00	06 05 00 00 00 00 08 04 30

OUTPUT  data2.txt:
29 2a 2b 2c 2d 2e 2f 2a 2b 2c 2d 2e 00 2e 2f 2a 2b 30
total: 18 bytes
*/
void solve() {
    ifstream fin("data2.bin", ios::in | ios::binary);
    ofstream fout("data2.txt", ios::out);
    if (!fin.is_open()) assert(0);
    vector<int> vec;
    char num;
    while (fin.read((char*) &num, sizeof(char))) { // input data
        vec.push_back(num);
    }
    vector<char> res;
    for (int i = 0; i < vec.size(); i++) {
        if (vec[i] != 0) {
            // if byte not equal to 0, append directly
            res.push_back(vec[i]);
            // cout << "Writing b'" << (char)vec[i] << "'\n";
        }
        else {
            int p = vec[i + 1], d = vec[i + 2];
            i += 2;
            if (p < d) swap(p, d);
            // cout << "p = " << p << " " << "d = " << d << "\n";
            if (d == 0) res.push_back(0); // if d = 0, append 0
            else {
                int sz = res.size();
                // copy the needed range bytes from restoration part
                for (int j = sz - 1 - p + 1; j <= sz - 1 - (p - d + 1) + 1; j++) {
                    res.push_back(res[j]);
                    // cout << "Writing b'" << (char)res[j] << "'\n";
                }
            }
        } 
    }
    for (auto ch : res) {
        fout.write((char*)&ch, sizeof(ch));
    }
    // cout << res.size() << "\n";
}
signed main() {
    int t = 1;
    // cin >> t;
    while (t--) solve();
    return 0;
}
```

### (3)
#### tomfluff's solution

```python
bZERO = (0).to_bytes(1,'big')

def get_max_match(buff, i):
    max_p = 0
    max_d = 0
    j = 0
    k = i
    d = 0
    while j < i+1:
        if buff[j] == buff[k]:
            j += 1
            k += 1
            d += 1
        else:
            if max_d < d:
                max_d = d
                max_p = j
            j = j - d + 1
            k = i
            d = 0
    return max_p, max_d

def compress_buffer(buff):
    comp_buff = []
    d = p = 0
    i = 0
    while i < len(buff):
        print(f"Checking for i={i} (from {len(buff)})")
        p,d = get_max_match(buff,i)
        if d < 4:
            if buff[i] == bZERO:
                comp_buff.append(bZERO)
                comp_buff.append(bZERO)
                comp_buff.append(bZERO)
            else:
                comp_buff.append(buff[i])
            i += 1
        else:
            comp_buff.append(int.to_bytes(0,1,'big'))
            comp_buff.append(int.to_bytes(p,1,'big'))
            comp_buff.append(int.to_bytes(d,1,'big'))
            i += d
    return comp_buff

def main():
    in_buff = []
    with open('2020-Summer/data2_s.txt', 'rb') as f:
        EOF = False
        while not EOF:
            r = f.read(1)
            if r == b'':
                EOF = True
                continue
            in_buff.append(r)
    
    comp_buff = compress_buffer(in_buff)

    with open('2020-Summer/data3.bin', 'wb') as f_out:
        for b in comp_buff:
            f_out.write(b)

if __name__ == "__main__":
    main()
```

#### FunTotal's solution
C++ solution:
```c++
#include <bits/stdc++.h>
using namespace std;
/*
这题楼上代码主要是对于匹配长度小等于3的时候选择不压缩，但是我感觉还得多考虑含0的情况，下面给出了hack数据data3b.txt，按楼上的py代码跑出来是下面那种，但是选择压缩得到的结果是上面更短的。
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
WRIGHT:  29 00 00 00 2a 00 03 03  (shorter)
WRONG:   29 00 00 00 2a 29 00 00 00 2a
*/
void solve() {
    ifstream fin("data3b.txt", ios::in | ios::binary);
    ofstream fout("data3b.bin", ios::out);
    vector<int> vec, res;
    char num;
    while (fin.read((char*) &num, sizeof(num)))
        vec.push_back(num);
    for (int i = 0; i < vec.size(); i++) {
        int l = 0, r = -1; // max range that matchs
        for (int j = 0; j < i; j++) { // enumerate the begginning of match part
            int len = 0; // max matched len
            while (j + len < i && i + len < vec.size() && vec[j + len] == vec[i + len])
                len++; // match and notice do not exceed the limit
            if (len > (r - l + 1)) {
                l = j, r = j + len - 1;
            }
        }
        int max_len = r - l + 1;
        bool contain0 = 0;
        for (int i = l; i <= r; i++)
            contain0 |= vec[i] == 0;
        if (r == -1 || (max_len <= 3 && !contain0)) { // choose not to compress
            if (vec[i] == 0) {
                res.push_back(0);
                res.push_back(0);
                res.push_back(0);
            } else
                res.push_back(vec[i]);
        } else {
            int p = i - l;
            int d = max_len;
            res.push_back(0);
            res.push_back(p);
            res.push_back(d);
            i += d - 1;
        }
    }
    for (auto c : res) {
        char ch = c;
        fout.write((char*) &ch, sizeof(ch));
    }
}
signed main() {
    int t = 1;
    while (t--) solve();
    return 0;
}
```

### (4)
#### tomfluff's solution

```python
def get_letters_by_usage_from_file(f):
    lls = dict()
    for l in f.readlines():
        for w in l.lower():
            for c in w:
                if c in lls:
                    lls[c] += 1
                else:
                    lls[c] = 1
    return lls

def main():
    en_w = de_w = dict()

    with open('2020-Summer/data4.txt', 'r') as f:
        en_w = get_letters_by_usage_from_file(f)
    with open('2020-Summer/data4dict.txt', 'r') as f:
        de_w = get_letters_by_usage_from_file(f)

    sll_e = []
    for k in en_w:
        sll_e.append((k,en_w[k]))
    sll_d = []
    for k in de_w:
        sll_d.append((k,de_w[k]))

    sll_e.sort(key=lambda x: x[1], reverse=True)
    sll_d.sort(key=lambda x: x[1], reverse=True)
    for i in range(len(sll_e)):
        print(f"#{sll_e[i][1]} '{sll_e[i][0]}' , '{sll_d[i][0]}'")
    # use the printed information to understand the encryption by hand

if __name__ == "__main__":
    main()
```

### (5)
#### tomfluff's solution

```python
# Can also use 'factor' linux command

import primefac

def get_decomposition(n):
    return list(primefac.primefac(n))

def main():
    n = 3858843578360632069557337
    print(type(n))
    pq = get_decomposition(n)
    print(pq)

    # Using p and q we can compute d, then decrypt the file

if __name__ == "__main__":
    main()
```

#### FunTotal's solution

completed code:
```python
# 这题基于楼上代码，把得到p, q后具体如何解密的代码补充完整，该小题介绍的算法为RSA思想的加密算法，由于题中数据过大，如使用C++需要用支持int128的Pollard Rho算法来质因数分解，实在是不如python，故没有写C++版本
import primefac

def get_decomposition(n):
    return list(primefac.primefac(n))


def main():
    n = 3858843578360632069557337
    e = 551263368336670859257571
    pq = get_decomposition(n)
    # print(pq)

    # Using p and q we can compute d, then decrypt the file
    p = pq[0]
    q = pq[1]
    d = ((p - 1) * (q - 1) + 1) // e
    res = []
    with open('data5.txt', 'r') as f:
        arr = f.read().split()
    for c in arr:
        c= int(c)
        m = pow(c, d, n)
        # m = 2 ** 24 * b0 + 2 ** 16 * b1 + 2 ** 8 * b2 + b3
        b = [0, 0, 0, 0]
        for i in range(0, 4):
            b[3 - i] = m % 256
            m -= b[3 - i]
            m = m // 256
        for i in range(0, 4):
            res.append(b[i])
    with open('data5ans.txt', 'wb') as f:
        for num in res:
            f.write(bytes([num]))

if __name__ == "__main__":
    main()
```
