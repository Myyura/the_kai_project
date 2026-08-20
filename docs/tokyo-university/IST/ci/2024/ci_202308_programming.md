---
sidebar_label: 2023年8月実施 プログラミング
tags:
  - Tokyo-University
  - Computer-Science.Programming.File-Input-and-Output
  - Computer-Science.Programming.String-Parsing
  - Computer-Science.Programming.Static-Interval-Analysis
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki), [FunTotal](https://github.com/totalhuang), 祭音Myyura

## **Description**
プログラミング言語 $P$ の変数の値は 0 以上 999 以下の整数とする。変数名は `x1`, `x27` のように `x` から始まり 0 以上 999 以下の整数が続く名前とする。  

言語 $P$ のプログラムの実行や分析をするときに，変数 `xN` についての不等式 $S_N \leq xN \leq T_N$ を用いる。
各変数につき，不等式は高々一つである。
$S_N$ と $T_N$ は 0 以上 999 以下の整数である。不等式をファイルに保存するときは，三つ組 $N, S_N, T_N$ で表して保存する。
例：変数 `x31` についての不等式 `0 ≤ x31 ≤ 9` は `31,0,9` で表す。
複数の不等式をファイルに保存するときは，三つ組をカンマで区切って保存する。
例：`0 ≤ x31 ≤ 9`, `3 ≤ x7 ≤ 5`, `100 ≤ x56 ≤ 999` の三つの不等式を保存する場合は，次の文字列をファイルに保存する。  

```
31,0,9,7,3,5,56,100,999
```

同じ変数について複数の不等式が同一のファイルに保存されているときは，最も右側に現れるものだけを有効とし，他は無視する。
またファイルには，プログラムに現れない変数についての不等式が含まれているかもしれない。

(1) いくつかの変数についての不等式がファイル`data1a.txt`に保存されている。それらの変数の中で，最小値と最大値の差が最も大きい変数の名前と、その最小値と最大値を解答用紙に書け。
複数ある場合は全て書け。
同様のことを`data1b.txt`と`data1c.txt`に対してもせよ。

---

言語 $P$ は `x11 = x3` のような変数から変数への代入文からなる。`x11 = x3` は右辺の変数 `x3` の値を左辺の変数 `x11` の（新しい）値とする，という意味である。
代入文の左辺と右辺は，どちらも一つの変数である。

言語 $P$ のプログラムは実行する順に左から右へ代入文をセミコロンで区切って並べた文字列である。例：プログラムが  

```
x11 = x3; x12 = x11; x7 = x11
```

の場合，最初に実行される代入文は `x11 = x3` である。
プログラムをファイルに保存するときは，`xM = xN` のような代入文を 二つ組 `M,N` で表して保存する。例：`x11 = x3` は `11,3` である。  
複数の代入文からなるプログラムを保存するときは，代入文の実行順にこの二つ組をカンマで区切って保存する。例：上のプログラムをファイルに保存するときは，次の文字列をファイルに保存する。  

```
11,3,12,11,7,11
```

**(2)** 言語 $P$ のプログラムがファイル `data2a.txt` に保存されている。代入文の左辺に現れる回数が最も多い変数を解答用紙に書け。複数ある場合は全て書け。
同様のことをファイル `data2b.txt` と `data2c.txt` に対してもせよ。

---

言語 P のプログラムを実行するとき、各変数がプログラムの終了時にとる値の最小値と最大値を考える。
ある変数 `xN` を含む最初の代入文の右辺がその変数 xN であるとき、変数 xN は、次の規則でランダムに選択される値を初期値としてもつとする。
変数についての不等式を保存したファイルの中に、その変数 `xN` の不等式 $S_N \leq xN \leq T_N$ が含まれる場合は、$S_N$ 以上 $T_N$ 以下のランダムな整数を初期値に選ぶ。
含まれない場合は 0 以上 100 以下のランダムな整数を選ぶ。

例えばプログラムが

```
x7 = x2;  x11 = x7;  x7 = x3
```

であって、変数についての不等式が $5 \leq x2 \leq 9$、かつ $1 \leq x3 \leq 3$、$8 \leq x11 \leq 10$ であるとする。
変数 `x2` と `x3` の初期値は、それらの範囲内からランダムに選ばれる。
`x7` と `x11` は最初の代入文によって初期化される。
ランダムに選択される初期値のすべての組み合わせを考えると、プログラム終了時に変数 `x2` と `x11` がとる値の最小値は 5、最大値は 9 であり、変数 `x3` と `x7` がとる値の最小値は 1、最大値は 3 である。
このプログラムでは、変数 `x11` の値はそれについての不等式を満たすとは限らない。

**(3)** 言語 P のプログラムがファイル `data3a1.txt` に保存されている。
また、不等式がファイル `data3a2.txt` に保存されている。
変数 `x31`, `x41`, そして `x51` が、プログラム終了時にとる値の最小値と最大値を解答用紙に書け。
変数が代入文の中に一度も現れないときは、その変数については *Undefined* と書け。

同様のことを、プログラムのファイル `data3b1.txt` と不等式のファイル `data3b2.txt` の組と、
プログラムのファイル `data3c1.txt` と不等式のファイル `data3c2.txt` の組に対してもせよ。

---

プログラム中の変数が実行の途中（終了時を含む）にとる値は終了時にとる値と異なることがある。ここで初期化前の変数の値は考えない。例えば上のプログラム

```
x7 = x2;  x11 = x7;  x7 = x3
```

で、変数についての不等式が同様に $5 \leq x2 \leq 9$、かつ $1 \leq x3 \leq 3$、$8 \leq x11 \leq 10$ であるとする。
変数 `x7` がプログラムの実行の途中にとる値の最小値は 1、最大値は 9 である。
変数 `x11` では最小値が 5、最大値が 9 である。

**(4)** 言語 P のプログラムがファイル `data4a1.txt` に保存されている。
また、不等式がファイル `data4a2.txt` に保存されている。
変数 `x31`、`x41`、そして `x51` がプログラムの実行の途中にとる値の最小値と最大値を解答用紙に書け。
変数が代入文の中に一度も現れないときは、その変数については、*Undefined* と書け。

同様のことをプログラムのファイル `data4b1.txt` と不等式のファイル `data4b2.txt` の組と、プログラムのファイル `data4c1.txt` と不等式のファイル `data4c2.txt` の組に対してもせよ。

---

変数 `xN` についての不等式が $S_N \leq xN \leq T_N$ であるとする。
また、プログラムの実行の途中に変数 `xN` がとる値の最小値が $a$、最大値が $b$ とする。
このとき、その変数 `xN` が実行の途中に取りえる値の範囲が不等式の範囲に納まらないとき、つまり $a < S_N \vee T_N < b$ であるなら、その変数に齟齬がある、とする。
なお、変数についての不等式がファイルに含まれないとき、その変数に齟齬はない。

**(5)** 言語 P のプログラムがファイル `data5a1.txt` に保存されている。
また、不等式がファイル `data5a2.txt` に保存されている。
このプログラムにおいて、齟齬がある変数を全て解答用紙に書け。ない場合は *None* と書け。

同様のことをプログラムのファイル `data5b1.txt` と不等式のファイル `data5b2.txt` の組と、プログラムのファイル `data5c1.txt` と不等式のファイル `data5c2.txt` の組に対してもせよ。

---

次に、代入文 `xM=xN` を考える。
左辺の `xM` についての不等式が $S_M \leq xM \leq T_M$、右辺の `xN` についての不等式が $S_N \leq xN \leq T_N$ であるとする。
このとき、$S_M \leq S_N \leq T_N \leq T_M$ でないとき、つまり $S_N < S_M \vee T_M < T_N$ であるとき、その代入文に齟齬がある、とする。
なお、変数 `xM` または `xN` についての不等式がファイルに含まれないとき、その代入文に齟齬はない。

例えばプログラムが

```
x10=x3; x10=x7; x11=x10
```

であって、変数についての不等式が $5 \leq x3 \leq 9$、かつ $1 \leq x7 \leq 3$、$1 \leq x10 \leq 9$、$1 \leq x11 \leq 3$、であるとする。
このとき変数 `x11` に齟齬はないが、代入文 `x11=x10` に齟齬がある。

**(6)** 言語 P のプログラムがファイル `data6a1.txt` に保存されている。
また、不等式がファイル `data6a2.txt` に保存されている。
このプログラムにおいて、齟齬がある代入文を全て解答用紙に書け。ない場合は *None* と書け。
もし同じ代入文が複数回現れ、それに齟齬がある場合、その代入文は一回だけ書け。

同様のことをプログラムのファイル `data6b1.txt` と不等式のファイル `data6b2.txt` の組と、プログラムのファイル `data6c1.txt` と不等式のファイル `data6c2.txt` の組に対してもせよ。 

---

ファイルの中に不等式が含まれない変数 `xN` それぞれについて、プログラム中の全ての代入文に齟齬がないように変数 `xN` の不等式 $S_N \leq xN \leq T_N$ を定める。

**(7)**  言語 P のプログラムがファイル `data7a1.txt` に保存されている。
また、不等式がファイル `data7a2.txt` に保存されている。
プログラム中に現れる全ての変数について、ファイル `data7a2.txt` の中に不等式が含まれない場合、その変数の不等式を定め、それらを解答用紙に書け。
複数の答があるときは、一つ書けばよい。
どのように不等式を定めても、一つ以上の代入文に齟齬がある場合は *None* と解答用紙に書け。

同様のことをプログラムのファイル `data7b1.txt` と不等式のファイル `data7b2.txt` の組と、プログラムのファイル `data7c1.txt` と不等式のファイル `data7c2.txt` の組に対してもせよ。


### 题目描述

程序语言 $P$ 的变量值均为 $0$～$999$ 的整数。变量名形如 `x1`、`x27`，即 `x` 后接 $0$～$999$ 的整数。执行或分析程序时，可为变量 `xN` 给出至多一个区间约束

$$
S_N\le xN\le T_N,\qquad 0\le S_N,T_N\le999.
$$

文件中用三元组 `N,S_N,T_N` 表示，例如 `0 ≤ x31 ≤ 9` 写为 `31,0,9`；多个约束连续以逗号分隔，如

```text
31,0,9,7,3,5,56,100,999
```

表示 `x31`、`x7`、`x56` 的三个区间。同一文件若同一变量出现多次，只认最右侧约束；文件也可能含程序未出现变量。

1. 对 `data1a.txt` 中变量，找区间宽度“最大值减最小值”最大的变量，写出变量名及最小、最大值；并列时全部写出。对 `data1b.txt`、`data1c.txt` 同样处理。

$P$ 的语句只有变量赋值 `xM = xN`，把右值赋给左变量。程序按执行顺序从左到右以分号分隔语句；文件中每句存为二元组 `M,N`，多个二元组以逗号连接。例如

```text
x11 = x3; x12 = x11; x7 = x11
```

存为

```text
11,3,12,11,7,11
```

2. 对 `data2a.txt`，找在赋值左侧出现次数最多的变量，并列时全写；对 `data2b.txt`、`data2c.txt` 同样处理。

分析程序结束时各变量可能值域。若变量 `xN` 的首次出现是在某条赋值的右侧，则它有随机初值：约束文件含其 $[S_N,T_N]$ 时，从该区间随机取整数；否则从 0～100 随机取整数。首次出现在左侧的变量由赋值初始化。考虑所有随机初值组合。例如

```text
x7 = x2; x11 = x7; x7 = x3
```

且 $5\le x2\le9$、$1\le x3\le3$、$8\le x11\le10$ 时，结束时 `x2,x11` 的值域为 $[5,9]$，`x3,x7` 为 $[1,3]$；赋值后的 `x11` 不保证仍满足其声明约束。

3. 程序、约束分别在 `data3a1.txt`、`data3a2.txt`。求程序结束时 `x31,x41,x51` 的最小、最大值；若变量从未出现在任何赋值中，写 *Undefined*。对文件对 `data3b1/3b2`、`data3c1/3c2` 同样处理。

变量执行途中（含结束时）的值域可能更宽，不考虑初始化前的值。上述示例中，`x7` 途中值域为 $[1,9]$，`x11` 为 $[5,9]$。

4. 对程序/约束文件对 `data4a1/4a2`，求 `x31,x41,x51` 在整个执行途中的最小、最大值；从未出现写 *Undefined*。对 `data4b1/4b2`、`data4c1/4c2` 同样处理。

若 `xN` 声明区间为 $[S_N,T_N]$，运行途中实际值域为 $[a,b]$，当 $a<S_N$ 或 $T_N<b$ 时称该变量有“不一致”；约束文件未包含它时，变量不视为不一致。

5. 对 `data5a1/5a2`，列出所有不一致变量；没有则写 *None*。对 `data5b1/5b2`、`data5c1/5c2` 同样处理。

对语句 `xM=xN`，若左右变量声明区间分别为 $[S_M,T_M]$、$[S_N,T_N]$，只有

$$
S_M\le S_N\le T_N\le T_M
$$

时才一致；即 $S_N<S_M$ 或 $T_M<T_N$ 时该赋值不一致。若任一变量无声明约束，则该赋值不视为不一致。例如

```text
x10=x3; x10=x7; x11=x10
```

配合 $x3\in[5,9]$、$x7\in[1,3]$、$x10\in[1,9]$、$x11\in[1,3]$ 时，变量 `x11` 本身没有运行值域不一致，但语句 `x11=x10` 的区间不一致。

6. 对 `data6a1/6a2` 列出所有不一致赋值；没有写 *None*。同一不一致语句重复出现只写一次。对 `data6b1/6b2`、`data6c1/6c2` 同样处理。
7. 对约束文件中未声明、但程序中出现的每个变量 `xN`，为其选择 $0\le S_N\le T_N\le999$ 的区间，使程序所有赋值的区间均一致。对 `data7a1/7a2` 写出所有需补充变量的一组可行区间；多解任选一组，若无论如何选择都至少有一条赋值不一致，则写 *None*。对 `data7b1/7b2`、`data7c1/7c2` 同样处理。

## **Kai**
We currently do not have the corresponding sample data files. If you have them and are willing to share, please submit a PR.

### (1)
#### itsuitsuki's solution

```python
# 31,0,9,7,3,5,56,100,999
# means x31 in [0,9], x7 in ...

ff_list = ["./data1a.txt","./data1b.txt","./data1c.txt"]
for ff in ff_list:
    bounds = {}
    with open(ff, "r") as f:
        for line in f.readlines():
            digits = [int(digit) for digit in line.split(',')]
            for i, var_idx in enumerate(digits[0::3]):
                if var_idx < 0 or var_idx > 999:
                    continue
                ii = 3*i # in orig array
                bounds[var_idx] = (digits[ii+1], digits[ii+2])
    max_diff = max(upper - lower for lower, upper in bounds.values())
    for var_idx, (lower, upper) in bounds.items():
        if upper - lower == max_diff:
            print(f"x{var_idx}: {lower} to {upper}")
```

#### FunTotal's solution

```c++
// 按照题意模拟，注意不等式只考虑最右边的
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
void solve(char suffix) {
    ifstream fin("data1" + string(1, suffix) + ".txt");
    ofstream fout("ans1" + string(1, suffix) + ".txt");
    string str; fin >> str;
    int num = 0;
    vector<int> vec;
    map<int, int> mp; //记录最右边出现的变量，左边再遇到忽略
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec.push_back(num), num = 0;
        else num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1) vec.push_back(num);
    }
    int mxdiff = -1;
    vector<tii> ans;
    for (int i = vec.size() - 3; i >= 0; i -= 3) { //从右往左，每个变量只看第一次出现
        int x = vec[i], mn = vec[i + 1], mx = vec[i + 2];
        if (mp.count(x)) continue;
        mp[x] = 1;
        if (mx - mn == mxdiff) ans.push_back({x, mn, mx});
        else if (mx - mn > mxdiff) {
            ans.clear();
            ans.push_back({x, mn, mx});
            mxdiff = mx - mn;
        }
    }
    for (auto [x, mn, mx] : ans)
        fout << "x" << x << ": " << mn << ", " << mx << "\n";
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (2)
#### itsuitsuki's solution

```python
# right_operand_freq = {}
ff_list = ["./data2a.txt","./data2b.txt","./data2c.txt"]
for ff in ff_list:
    left_operand_freq = {}
    with open(ff, "r") as f:
        for line in f.readlines():
            digits = [int(digit) for digit in line.split(',')]
            for var_idx in digits[::2]:
                if var_idx in left_operand_freq: # .keys()
                    left_operand_freq[var_idx] += 1
                else:
                    left_operand_freq[var_idx] = 1

    max_freq = max(left_operand_freq.values())
    argmax_freq = {var_idx for var_idx, freq in left_operand_freq.items()
                   if freq == max_freq}
    print(ff, argmax_freq, ":", max_freq)
```

#### FunTotal's solution
```c++
// 同样模拟，可以用map之类的记录一下出现次数
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
void solve(char suffix) {
    ifstream fin("data2" + string(1, suffix) + ".txt");
    ofstream fout("ans2" + string(1, suffix) + ".txt");
    string str; fin >> str;
    int num = 0;
    vector<int> vec;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec.push_back(num);
    }
    vector<int> ans;
    int mxcnt = 0;
    map<int, int> mp; //记录每个变量在赋值左边出现的次数
    for (int i = 0; i < vec.size(); i += 2) {
        mp[vec[i]]++;
        if (mp[vec[i]] > mxcnt)
            mxcnt = mp[vec[i]], ans.clear(), ans.push_back(vec[i]);
        else if (mp[vec[i]] == mxcnt)
            ans.push_back(vec[i]);
    }
    fout << "the max appear count is: " << mxcnt << "\n";
    fout << "and the variable(s): ";
    for (auto it : ans) fout << it << ", ";
    fout << "\n";
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (3)
#### itsuitsuki's solution

```python
ff_list_1 = ["./data3a1.txt","./data3b1.txt","./data3c1.txt"] # for assign
ff_list_2 = ["./data3a2.txt","./data3b2.txt","./data3c2.txt"] # for assign
lst = [31,41,51]

for ff1, ff2 in zip(ff_list_1, ff_list_2):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    program_appeared = set()
    with open(ff1, "r") as f1:
        lines1 = f1.readlines()
        assign_digits = []
        for line in lines1:
            assign_digits += [int(digit) for digit in line.split(',')]
    with open(ff2, "r") as f2:
        lines2 = f2.readlines()
        bounds_digits = []
        for line in lines2:
            bounds_digits += [int(digit) for digit in line.split(',')]
    for i, var_idx in enumerate(bounds_digits[0::3]):
        if var_idx < 0 or var_idx > 999:
            continue
        ii = 3*i # in orig array
        var_lower_b[var_idx] = bounds_digits[ii+1]
        var_upper_b[var_idx] = bounds_digits[ii+2]

    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        var_lower_b[left] = var_lower_b[right]
        var_upper_b[left] = var_upper_b[right]
        program_appeared.add(left)
        program_appeared.add(right)
        
    for var_idx in sorted(program_appeared):
        print(var_idx,":",var_lower_b[var_idx],"to",var_upper_b[var_idx])
    print("-"*20)
    for var_idx in lst:
        if var_idx not in program_appeared:
            print(var_idx,": Undefined")
            continue
        print(var_idx,":",var_lower_b[var_idx],"to",var_upper_b[var_idx])
    print("="*20)
```

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
const int maxn = 1e3 + 100;
pii range[maxn]; // 存储每个变量的取值范围
/*
这题开始有点上难度了，主要是题面有的时候不是特别清楚
这一题的话主要是记得变量未出现在赋值语句里的输出undefined
然后因为没有原数据，所以下面题目里有的求31，41的我都简化到题目给的样例里面的小数据了
data3a1.txt: 7,2,11,7,7,3
data3a2.txt: 2,5,9,3,1,3,11,8,10
output:
        The minval and mxval of 3 are: (1, 3)
        The minval and mxval of 7 are: (1, 3)
        The minval and mxval of 11 are: (5, 9)
*/
void solve(char suffix) {
    ifstream fin1("data3" + string(1, suffix) + "1.txt");
    ifstream fin2("data3" + string(1, suffix) + "2.txt");
    ofstream fout("ans3" + string(1, suffix) + ".txt");
    string str; fin1 >> str;
    int num = 0;
    vector<int> vec1, vec2; //vec1存赋值, vec2存变量范围
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec1.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec1.push_back(num);
    }
    fin2 >> str;
    num = 0;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec2.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec2.push_back(num);
    }
    fill(range, range + maxn, pii{-1, -1});
    for (int i = 0; i < vec2.size(); i += 3) {
        int x = vec2[i], l = vec2[i + 1], r = vec2[i + 2];
        range[x] = {l, r};
    }
    pii ans[3];
    vector<int> tar = {31, 41, 51};
    vector<bool> appeared(maxn, false);
    for (int i = 0; i < vec1.size(); i += 2)
        appeared[vec1[i]] = appeared[vec1[i + 1]] = true;
    {
        // 处理最小值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1); //-1区分一下从未出现过的变量
        for (int i = 0; i < maxn; i++)
            if (range[i] != pii{-1, -1})
                nowval[i] = range[i].first;
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) nowval[xr] = 0;
            nowval[xl] = nowval[xr];
        }
        int tem = 0;
        for (auto tarnum : tar) ans[tem++].first = nowval[tarnum];
    }
    {
        // 处理最大值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1); //-1区分一下从未出现过的变量
        for (int i = 0; i < maxn; i++)
            if (range[i] != pii{-1, -1})
                nowval[i] = range[i].second;
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) nowval[xr] = 100;
            nowval[xl] = nowval[xr];
        }
        int tem = 0;
        for (auto tarnum : tar) ans[tem++].second = nowval[tarnum];
    }
    int tem = 0;
    for (auto tarnum : tar) {
        if (!appeared[tarnum]) {
            fout << "tarnum " << tarnum << " is undefined\n";
            tem++;
            continue;
        }
        fout << "The minval and mxval of " << tarnum << " are: (" << ans[tem].first << ", " << ans[tem++].second << ")\n";
    }
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (4)
#### itsuitsuki's solution
```python
ff_list_1 = ["./data4a1.txt","./data4b1.txt","./data4c1.txt"] # for assign
ff_list_2 = ["./data4a2.txt","./data4b2.txt","./data4c2.txt"] # for bound
lst = [31,41,51]

for ff1, ff2 in zip(ff_list_1, ff_list_2):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    var_lower_b_dur = {} # during execution
    var_upper_b_dur = {}
    current = [None for _ in range(1000)]
    visited = set()
    with open(ff1, "r") as f1:
        lines1 = f1.readlines()
        assign_digits = []
        for line in lines1:
            assign_digits += [int(digit) for digit in line.split(',')]
    with open(ff2, "r") as f2:
        lines2 = f2.readlines()
        bounds_digits = []
        for line in lines2:
            bounds_digits += [int(digit) for digit in line.split(',')]
    for i, var_idx in enumerate(bounds_digits[0::3]):
        if var_idx < 0 or var_idx > 999:
            continue
        ii = 3*i # in orig array
        var_lower_b[var_idx] = bounds_digits[ii+1]
        var_upper_b[var_idx] = bounds_digits[ii+2]
        # visited.add(var_idx)

    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        if current[right] is None:
            current[right] = (var_lower_b[right], var_upper_b[right])
            var_lower_b_dur[right], var_upper_b_dur[right] = current[right]
        current[left] = current[right]
        lower, upper = current[left]
        var_lower_b_dur[left] = min(lower, var_lower_b_dur.get(left, lower))
        var_upper_b_dur[left] = max(upper, var_upper_b_dur.get(left, upper))
        visited.add(left)
        visited.add(right)
        
    for var_idx in list(visited):
        print(var_idx,":",var_lower_b_dur[var_idx],"to",var_upper_b_dur[var_idx])
    print("-"*20)
    for var_idx in lst:
        if var_idx not in visited:
            print(var_idx,": Undefined")
            continue
        print(var_idx,":",var_lower_b_dur[var_idx],"to",var_upper_b_dur[var_idx])
```

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
const int maxn = 1e3 + 100;
pii range[maxn];  // 存储每个变量的取值范围
/*
这一题维护赋值过程里每个变量的最值，就是把上一题的更新放在了每一次赋值中间
data4a1.txt: 7,2,11,7,7,3
data4a2.txt: 2,5,9,3,1,3,11,8,10,114,5,14

output:
            The minval and mxval of 3are: (1, 3)
            The minval and mxval of 7are: (1, 9)
            The minval and mxval of 11are: (5, 9)
            tarnum 114 is undefined

*/
void solve(char suffix) {
    ifstream fin1("data4" + string(1, suffix) + "1.txt");
    ifstream fin2("data4" + string(1, suffix) + "2.txt");
    ofstream fout("ans4" + string(1, suffix) + ".txt");
    string str;
    fin1 >> str;
    int num = 0;
    vector<int> vec1, vec2;  // vec1存赋值, vec2存变量范围
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec1.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec1.push_back(num);
    }
    fin2 >> str;
    num = 0;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec2.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec2.push_back(num);
    }
    fill(range, range + maxn, pii{-1, -1});
    for (int i = 0; i < vec2.size(); i += 3) {
        int x = vec2[i], l = vec2[i + 1], r = vec2[i + 2];
        range[x] = {l, r};
    }
    pii ans[3] = {{1000, 0}, {1000, 0}, {1000, 0}};
    vector<int> tar = {31, 41, 51};
    {
        // 处理最小值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1);  //-1区分一下从未出现过的变量
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) {
                if (range[xr] != pii{-1, -1}) nowval[xr] = range[xr].first;
                else nowval[xr] = 0;
            }
            nowval[xl] = nowval[xr];
            int tem = 0;
            for (auto tarnum : tar) {
                if (nowval[tarnum] != -1)
                ans[tem].first = min(ans[tem].first, nowval[tarnum]);
                tem++;
            }
        }
    }
    {
        // 处理最大值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1);  //-1区分一下从未出现过的变量
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) {
                if (range[xr] != pii{-1, -1}) nowval[xr] = range[xr].second;
                else nowval[xr] = 100;
            }
            nowval[xl] = nowval[xr];
            int tem = 0;
            for (auto tarnum : tar) {
                if (nowval[tarnum] != -1)
                    ans[tem].second = max(ans[tem].second, nowval[tarnum]);
                tem++;
            }
        }
    }
    int tem = 0;
    for (auto tarnum : tar) {
        if (ans[tem] == pii(1000, 0)) {
            fout << "tarnum " << tarnum << " is undefined\n";
            tem++;
            continue;
        }
        fout << "The minval and mxval of " << tarnum << " are: ("
             << ans[tem].first << ", " << ans[tem++].second << ")\n";
    }
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (5)
#### itsuitsuki's solution
```python
from copy import deepcopy


ff_list_1 = ["./data5a1.txt","./data5b1.txt","./data5c1.txt"] # for assign
ff_list_2 = ["./data5a2.txt","./data5b2.txt","./data5c2.txt"] # for bound

for ff1, ff2 in zip(ff_list_1, ff_list_2):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    var_lower_b_dur = {} # during execution
    var_upper_b_dur = {}
    initial = set()
    reassigned = set() # may be inconsistent
    inconsis = set()
    with open(ff1, "r") as f1:
        lines1 = f1.readlines()
        assign_digits = []
        for line in lines1:
            assign_digits += [int(digit) for digit in line.split(',')]
    with open(ff2, "r") as f2:
        lines2 = f2.readlines()
        bounds_digits = []
        for line in lines2:
            bounds_digits += [int(digit) for digit in line.split(',')]
    for i, var_idx in enumerate(bounds_digits[0::3]):
        if var_idx < 0 or var_idx > 999:
            continue
        ii = 3*i # in orig array
        var_lower_b[var_idx] = bounds_digits[ii+1]
        var_upper_b[var_idx] = bounds_digits[ii+2]
        initial.add(var_idx)
    ori_l_b = deepcopy(var_lower_b)
    ori_u_b = deepcopy(var_upper_b)

    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        var_lower_b[left] = var_lower_b[right]
        var_upper_b[left] = var_upper_b[right]
        if left in var_lower_b_dur.keys():
            var_lower_b_dur[left] = min(var_lower_b[right], var_lower_b_dur[left])
        else:
            var_lower_b_dur[left] = var_lower_b[right]
        if left in var_upper_b_dur.keys():
            # print(var_idx,var_upper_b_dur[left])
            var_upper_b_dur[left] = max(var_upper_b[right], var_upper_b_dur[left])
            # print(var_idx,var_upper_b_dur[left])
        else:
            # print(var_idx,var_upper_b_dur[left])
            var_upper_b_dur[left] = var_upper_b[right]
            # print(var_idx,var_upper_b_dur[left])
        reassigned.add(left)
    
    
    for var_idx in list(reassigned):
        if var_idx in initial:
            print(var_idx,":",ori_l_b[var_idx], ori_u_b[var_idx])
            print(var_idx,":",var_lower_b_dur[var_idx], var_upper_b_dur[var_idx])
            if ori_l_b[var_idx] > var_lower_b_dur[var_idx] or \
                ori_u_b[var_idx] < var_upper_b_dur[var_idx]:
                print(var_idx,"inconsistent")
                inconsis.add(var_idx)
    print("Result:", sorted(inconsis) if inconsis else None)
    print("="*20)
```

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
const int maxn = 1e3 + 100;
pii range[maxn];  // 存储每个变量的取值范围
/*
这一题需要判断每个变量在赋值过程里会不会超过不等式的约束，可以适当利用上一题中求每个变量过程里的最值的代码
data5a1.txt: 10,3,10,7,11,10
data5a2.txt: 3,5,9,7,1,3,10,1,9,11,1,3
output: None

*/
void solve(char suffix) {
    ifstream fin1("data5" + string(1, suffix) + "1.txt");
    ifstream fin2("data5" + string(1, suffix) + "2.txt");
    ofstream fout("ans5" + string(1, suffix) + ".txt");
    string str;
    fin1 >> str;
    int num = 0;
    vector<int> vec1, vec2;  // vec1存赋值, vec2存变量范围
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec1.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec1.push_back(num);
    }
    num = 0;
    fin2 >> str;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec2.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec2.push_back(num);
    }
    fill(range, range + maxn, pii{-1, -1});
    for (int i = 0; i < vec2.size(); i += 3) {
        int x = vec2[i], l = vec2[i + 1], r = vec2[i + 2];
        range[x] = {l, r};
    }
    pii ans[maxn];
    for (int i = 0; i < maxn; i++)
        ans[i] = {1000, 0};
    {
        // 处理最小值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1);  //-1区分一下从未出现过的变量
        for (int i = 0; i < maxn; i++)
            if (range[i] != pii{-1, -1})
                nowval[i] = range[i].first;
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) {
                if (range[xr] != pii{-1, -1}) nowval[xr] = range[xr].first;
                else nowval[xr] = 0;
            }
            nowval[xl] = nowval[xr];
            ans[xl].first = min(ans[xl].first, nowval[xl]);
        }
    }
    {
        // 处理最大值
        vector<int> nowval(maxn);
        fill(nowval.begin(), nowval.end(), -1);  //-1区分一下从未出现过的变量
        for (int i = 0; i < maxn; i++)
            if (range[i] != pii{-1, -1})
                nowval[i] = range[i].second;
        for (int i = 0; i < vec1.size(); i += 2) {
            int xl = vec1[i], xr = vec1[i + 1];
            if (nowval[xr] == -1) {
                if (range[xr] != pii{-1, -1}) nowval[xr] = range[xr].second;
                else nowval[xr] = 100;
            }
            nowval[xl] = nowval[xr];
            ans[xl].second = max(ans[xl].second, nowval[xl]);
        }
    }
    vector<int> res; // 存储越界的变量
    for (int i = 0; i < maxn; i++) {
        if (ans[i] == pii{1000, 0}) continue; //未出现的变量不算
        if (range[i] == pii{-1, -1}) continue; //没有不等式的变量没有齟齬
        if (ans[i].first < range[i].first || ans[i].second > range[i].second)
            res.push_back(i);
    }
    if (res.empty()) {
        fout << "None\n";
        return;
    }
    fout << "inconsistent varibles are: ";
    for (auto it : res)
        fout << it << ", ";
    fout << "\n";
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (6)
#### itsuitsuki's solution
```python
from copy import deepcopy
ff_list_1 = ["./data6a1.txt","./data6b1.txt","./data6c1.txt"] # for assign
ff_list_2 = ["./data6a2.txt","./data6b2.txt","./data6c2.txt"] # for bound

for ff1, ff2 in zip(ff_list_1, ff_list_2):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    visited = set()
    constrained = set()
    inconsistency = set() # set of tuples
    with open(ff1, "r") as f1:
        lines1 = f1.readlines()
        assign_digits = []
        for line in lines1:
            assign_digits += [int(digit) for digit in line.split(',')]
    with open(ff2, "r") as f2:
        lines2 = f2.readlines()
        bounds_digits = []
        for line in lines2:
            bounds_digits += [int(digit) for digit in line.split(',')]
    for i, var_idx in enumerate(bounds_digits[0::3]):
        if var_idx < 0 or var_idx > 999:
            continue
        ii = 3*i # in orig array
        var_lower_b[var_idx] = bounds_digits[ii+1]
        var_upper_b[var_idx] = bounds_digits[ii+2]
        constrained.add(var_idx)
    ori_l_b = deepcopy(var_lower_b)
    ori_u_b = deepcopy(var_upper_b)
    
    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        var_lower_b[left] = var_lower_b[right]
        var_upper_b[left] = var_upper_b[right]
        visited.add(left)
        if left in constrained and right in constrained and not (
                ori_l_b[left] <= ori_l_b[right] <= ori_u_b[right] <= ori_u_b[left]):
            inconsistency.add((left, right))
        
    for inc in inconsistency:
        print("Inconsistency: x{} = x{}".format(inc[0],inc[1]))
    if not inconsistency:
        print(None)
    print("="*20)
```

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
const int maxn = 1e3 + 100;
pii range[maxn];  // 存储每个变量的取值范围
/*
这里主要注意题意，好像对于赋值语句的判断，只考虑前后变量的不等式约束，我原本觉得随着前面的赋值，可能导致每个变量的实际取值范围会变小，但是从题意看好像不需要考虑这么复杂
data6a1.txt: 10,3,10,7,11,10
data6a2.txt: 3,5,9,7,1,3,10,1,9,11,1,3
output:
        inconsistent assignments are: x11 = x10, 

*/
void solve(char suffix) {
    ifstream fin1("data6" + string(1, suffix) + "1.txt");
    ifstream fin2("data6" + string(1, suffix) + "2.txt");
    ofstream fout("ans6" + string(1, suffix) + ".txt");
    string str;
    fin1 >> str;
    int num = 0;
    vector<int> vec1, vec2;  // vec1存赋值, vec2存变量范围
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec1.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec1.push_back(num);
    }
    fin2 >> str;
    num = 0;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec2.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec2.push_back(num);
    }
    fill(range, range + maxn, pii{1000, 0});
    for (int i = 0; i < vec2.size(); i += 3) {
        int x = vec2[i], l = vec2[i + 1], r = vec2[i + 2];
        range[x] = {l, r};
    }
    set<pii> s; //存储去重后的不合法不等式
    for (int i = 0; i < vec1.size(); i += 2) {
        int xl = vec1[i], xr = vec1[i + 1];
        if (range[xl] == pii{1000, 0} || range[xr] == pii{1000, 0}) {
            continue;
        }
        if (range[xl].first > range[xr].first || range[xl].second < range[xr].second)
            s.insert(pii{xl, xr});
    }
    if (s.empty()) fout << "None\n";
    else {
        fout << "inconsistent assignments are: ";
        for (auto [xn, xm] : s)
            fout << "x" << xn << " = x" << xm << ", ";
        fout << "\n";
    }
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```

### (7)
#### itsuitsuki's solution
For an assignment `xL = xR`, add the containment edge `L -> R`.

```python
from collections import defaultdict, deque

program_files = [f"./data7{s}1.txt" for s in "abc"]
bound_files = [f"./data7{s}2.txt" for s in "abc"]

for program_file, bound_file in zip(program_files, bound_files):
    a = [int(x) for x in open(program_file).read().split(',')]
    b = [int(x) for x in open(bound_file).read().split(',')]
    edges = list(zip(a[::2], a[1::2]))
    bounds = {}
    for x, lower, upper in zip(b[::3], b[1::3], b[2::3]):
        bounds[x] = (lower, upper)       # the rightmost one wins

    graph, reverse = defaultdict(list), defaultdict(list)
    variables = set()
    for left, right in edges:
        graph[left].append(right)
        reverse[right].append(left)
        variables.update((left, right))

    def reachable(start, graph):
        seen, queue = {start}, deque([start])
        while queue:
            for nxt in graph[queue.popleft()]:
                if nxt not in seen:
                    seen.add(nxt)
                    queue.append(nxt)
        return seen

    answer = dict(bounds)
    for x in variables - bounds.keys():
        fixed_ancestors = reachable(x, reverse) & bounds.keys()
        lower = max((bounds[y][0] for y in fixed_ancestors), default=0)
        upper = min((bounds[y][1] for y in fixed_ancestors), default=999)
        answer[x] = (lower, upper)

    valid = all(answer[left][0] <= answer[right][0]
                <= answer[right][1] <= answer[left][1]
                for left, right in edges)
    if not valid:
        print(program_file, None)
    else:
        print(program_file,
              {x: answer[x] for x in sorted(variables - bounds.keys())})

# For edges 10->3, 10->7, 11->10 and fixed ranges x3=[5,9], x7=[1,3],
# one answer is x10=x11=[1,9].
```

#### FunTotal's solution
```c++
#include <bits/stdc++.h>
#define pii pair<int, int>
#define tii tuple<int, int, int>
using namespace std;
const int maxn = 1e3 + 1000;
/*
思路: 对赋值 xL=xR 建边 L->R，要求 L 的区间包含 R 的区间。对每个待定变量，
下界取所有能到达它的已知祖先下界的最大值，上界取这些祖先上界的最小值；没有已知祖先时取 [0,999]。
最后逐边检查包含关系，失败则输出 None。

data71.txt: 10,3,10,7,11,10
data72.txt: 3,5,9,7,1,3
output:
        X10 range from(0, 999)
        X11 range from(0, 999)
（取 X10=X11=[1,9] 也合法。）

这题还有很多特殊情况，没有专门造数据会很难卡
我这里简单举一种:
data71.txt: 7,3,3,5,5,7
data72.txt: 10,10,10
赋值里面全都是需要决定的变量，且构成环，而不等式里存在未出现在赋值的变量
output:
        X3 range from(0, 999)
        X5 range from(0, 999)
        X7 range from(0, 999)
*/
void solve(char suffix) {
    ifstream fin1("data7" + string(1, suffix) + "1.txt");
    ifstream fin2("data7" + string(1, suffix) + "2.txt");
    ofstream fout("ans7" + string(1, suffix) + ".txt");
    string str;
    fin1 >> str;
    int num = 0;
    vector<int> vec1, vec2;  // vec1存赋值, vec2存变量范围
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec1.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec1.push_back(num);
    }
    num = 0;
    fin2 >> str;
    for (int i = 0; i < str.length(); i++) {
        if (str[i] == ',')
            vec2.push_back(num), num = 0;
        else
            num = num * 10 + str[i] - '0';
        if (i == (int)str.length() - 1)
            vec2.push_back(num);
    }
    vector<pii> range(maxn, {-1, -1});
    set<int> fixed, variables;
    for (int i = 0; i < vec2.size(); i += 3) {
        int x = vec2[i], l = vec2[i + 1], r = vec2[i + 2];
        range[x] = {l, r};
        fixed.insert(x);
    }
    vector<vector<int>> reverse_graph(maxn);
    for (int i = 0; i < vec1.size(); i += 2) {
        int xl = vec1[i], xr = vec1[i + 1];
        reverse_graph[xr].push_back(xl);
        variables.insert(xl);
        variables.insert(xr);
    }

    for (int start : variables) {
        if (fixed.count(start)) continue;
        vector<bool> seen(maxn, false);
        queue<int> q;
        q.push(start);
        seen[start] = true;
        int lower = 0, upper = 999;
        while (!q.empty()) {
            int u = q.front(); q.pop();
            if (fixed.count(u)) {
                lower = max(lower, range[u].first);
                upper = min(upper, range[u].second);
            }
            for (int v : reverse_graph[u]) {
                if (!seen[v]) seen[v] = true, q.push(v);
            }
        }
        range[start] = {lower, upper};
    }

    for (int i = 0; i < vec1.size(); i += 2) {
        int u = vec1[i], v = vec1[i + 1];
        if (range[u].first > range[u].second || range[u].first > range[v].first ||
            range[v].first > range[v].second ||
            range[u].second < range[v].second) {
            fout << "None\n";
            return;
        }
    }

    bool printed = false;
    for (int x : variables) {
        if (fixed.count(x)) continue;
        printed = true;
        fout << "X" << x << " range from(" << range[x].first << ", "
             << range[x].second << ")\n";
    }
    if (!printed) fout << "No variable needs to be decided\n";
}
signed main() {
    for (char suffix : {'a', 'b', 'c'}) solve(suffix);
    return 0;
}
```
