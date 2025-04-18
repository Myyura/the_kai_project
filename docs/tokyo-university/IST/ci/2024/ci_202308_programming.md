---
sidebar_label: '2023年8月実施 プログラミング'
tags:
  - Tokyo-University
  - Programming
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2023年8月実施 プログラミング

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (日本語)**
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


## **Kai**
We currently do not have the corresponding sample data files. If you have them and are willing to share, please submit a PR.

### (1)

```python
# 31,0,9,7,3,5,56,100,999
# means x31 in [0,9], x7 in ...

ff_list = ["./data1a.txt","./data1b.txt","./data1c.txt"]
for ff in ff_list:
    var_lower_b = [float("nan") for _ in range(1000)]
    var_upper_b = [float("nan") for _ in range(1000)]
    set_visit = set()
    max_diff = 0
    argmax_diff = set()
    with open(ff, "r") as f:
        for line in f.readlines():
            digits = [int(digit) for digit in line.split(',')]
            for i, var_idx in enumerate(digits[0::3]):
                if var_idx < 0 or var_idx > 999:
                    continue
                ii = 3*i # in orig array
                var_lower_b[var_idx] = digits[ii+1]
                var_upper_b[var_idx] = digits[ii+2]
                set_visit.add(var_idx)
                if max_diff < digits[ii+2] - digits[ii+1]:
                    max_diff = digits[ii+2] - digits[ii+1]
                    argmax_diff = set()
                    argmax_diff.add(var_idx)
                elif max_diff == digits[ii+2] - digits[ii+1]:
                    argmax_diff.add(var_idx)
        print(argmax_diff, ":", max_diff)
```

### (2)

```python
left_operand_freq = {}
# right_operand_freq = {}
ff_list = ["./data2a.txt","./data2b.txt","./data2c.txt"]
ff_list = ["./data2a.txt"]
for ff in ff_list:
    with open(ff, "r") as f:
        for line in f.readlines():
            digits = [int(digit) for digit in line.split(',')]
            for var_idx in digits[::2]:
                if var_idx in left_operand_freq: # .keys()
                    left_operand_freq[var_idx] += 1
                else:
                    left_operand_freq[var_idx] = 1

max_freq = 0
argmax_freq = set()
for var_idx, freq in left_operand_freq.items():
    if max_freq < freq:
        argmax_freq = set([var_idx])
        max_freq = freq
    elif max_freq == freq:
        argmax_freq.add(var_idx)
        
print(argmax_freq,":",freq)
```

### (3)

```python
ff_list_1 = ["./data3a1.txt","./data3b1.txt","./data3c1.txt"] # for assign
ff_list_2 = ["./data3a2.txt","./data3b2.txt","./data3c2.txt"] # for assign
lst = [31,41,51]

for ff1, ff2 in zip(ff_list_1[:1], ff_list_2[:1]):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
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
        visited.add(var_idx)

    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        var_lower_b[left] = var_lower_b[right]
        var_upper_b[left] = var_upper_b[right]
        visited.add(left)
        visited.add(right)
        
    for var_idx in list(visited):
        print(var_idx,":",var_lower_b[var_idx],"to",var_upper_b[var_idx])
    print("-"*20)
    for var_idx in lst:
        if var_idx not in visited:
            print(var_idx,": Undefined")
            continue
        print(var_idx,":",var_lower_b[var_idx],"to",var_upper_b[var_idx])
    print("="*20)
```

### (4)

```python
ff_list_1 = ["./data4a1.txt"] # for assign
ff_list_2 = ["./data4a2.txt"] # for bound
lst = [31,41,51]

for ff1, ff2 in zip(ff_list_1[:1], ff_list_2[:1]):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    var_lower_b_dur = {} # during execution
    var_upper_b_dur = {}
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
        visited.add(left)
        # visited.add(right)
        
    for var_idx in list(visited):
        print(var_idx,":",var_lower_b_dur[var_idx],"to",var_upper_b_dur[var_idx])
    print("-"*20)
    for var_idx in lst:
        if var_idx not in visited:
            print(var_idx,": Undefined")
            continue
        print(var_idx,":",var_lower_b_dur[var_idx],"to",var_upper_b_dur[var_idx])
```

### (5)

```python
from copy import deepcopy


ff_list_1 = ["./data5a1.txt","./data5b1.txt","./data5c1.txt"] # for assign
ff_list_2 = ["./data5a2.txt","./data5b2.txt","./data5c2.txt"] # for bound

for ff1, ff2 in zip(ff_list_1[:1], ff_list_2[:1]):
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
    print("="*20)
```

### (6)

```python
from copy import deepcopy
ff_list_1 = ["./data6a1.txt",] # for assign
ff_list_2 = ["./data6a2.txt",] # for assign
lst = [31,41,51]

for ff1, ff2 in zip(ff_list_1[:1], ff_list_2[:1]):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    visited = set()
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
    ori_l_b = deepcopy(var_lower_b)
    ori_u_b = deepcopy(var_upper_b)
    
    for left, right in zip(assign_digits[::2],assign_digits[1::2]):
        var_lower_b[left] = var_lower_b[right]
        var_upper_b[left] = var_upper_b[right]
        visited.add(left)
        if not (ori_l_b[left] <= ori_l_b[right] <= ori_u_b[right] <= ori_u_b[left]):
            inconsistency.add((left, right))
        
    for inc in inconsistency:
        print("Inconsistency: x{} = x{}".format(inc[0],inc[1]))
    if not inconsistency:
        print(None)
    print("="*20)
```

### (7)

This script should be run multiple times for achieving the final result.

```python
from copy import deepcopy
ff_list_1 = ["./data6a1.txt",] # for assign
ff_list_2 = ["./data6a2.txt",] # for assign

for ff1, ff2 in zip(ff_list_1[:1], ff_list_2[:1]):
    var_lower_b = [0 for _ in range(1000)] # inclusive
    var_upper_b = [100 for _ in range(1000)] # incl
    initial = set()
    assign_appeared = set()
    assigns = set()
    inconsistency = set() # set of tuples
    proposed_ranges = {}
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
        assign_appeared.add(left)
        assign_appeared.add(right)
        assigns.add((left, right))

    # those in assign_appeared but not in initial
    subtracted = assign_appeared - initial
    # print(initial, assign_appeared)
    # print(subtracted)
    noneflag = False
    for n in list(subtracted):
        min_bounds = [0,100] # range of lb initially [0,100]
        max_bounds = [0,100] # range of ub initially [0,100]
        # print(todo_idx)
        # we need: 
        
        for ass in assigns:
            if ass[0] == n: # n is the left, the range should be big
                # for every assign xn = xm, forall m
                # min_bound[n] <= min_bound[m] <= max_bound[m] <= max_bound [n]
                min_bounds[1] = min(min_bounds[1],ori_l_b[ass[1]])
                max_bounds[0] = max(max_bounds[0],ori_u_b[ass[1]])
            elif ass[1] == n:
                # for every assign xm = xn, forall m
                # min_bound[m] <= min_bound[n] <= max_bound[n] <= max_bound[m]
                min_bounds[0] = max(min_bounds[0],ori_l_b[ass[0]])
                max_bounds[1] = min(max_bounds[1],ori_u_b[ass[0]])
        proposed_ranges[n] = (min_bounds,max_bounds)
    for n in list(subtracted):
        min_bounds, max_bounds = proposed_ranges[n]
        flag = (min_bounds[0] <= min_bounds[1] <= max_bounds[0] <= max_bounds[1])
        if not flag:
            noneflag = True
    print("To init:",subtracted)
    if not subtracted:
        print("All consistent")
    elif noneflag:
        print(None)
    else:
        for n in list(subtracted):
            min_bounds, max_bounds = proposed_ranges[n]
            print(f"Min bounds of {n} is {min_bounds}")
            print(f"Max bounds of {n} is {max_bounds}")
    print("="*20)
    
    # NOTE: USE THIS BY A RECURSIVE BUILDING. 
    # NOTE: For every non-inited pair, 
    # you shall **ADD** a realization (e.g. extremes of the ranges of lb/ubs) of this to the script / data, 
    # and then redo the whole program to find the pairs of the rest. and for the pairs of the rest, do again ...

    # e.g. FOR `10,3,10,7,11,10` in data6a1 (assign), `3,5,9,7,1,3` in 6a2 (bound)
    # first run the program:
    """
    To init: {10, 11}
    Min bounds of 10 is [0, 1]
    Max bounds of 10 is [9, 100]
    Min bounds of 11 is [0, 0]
    Max bounds of 11 is [100, 100]
    """
    # then set 6a2 as `3,5,9,7,1,3` + `10,1,9` for example
    # run again and you get
    """
    To init: {11}
    Min bounds of 11 is [0, 1]
    Max bounds of 11 is [9, 100]
    """
    # and we find we can add `11,1,9`
    
```

