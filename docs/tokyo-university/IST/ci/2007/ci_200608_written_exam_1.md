---
sidebar_label: '2006年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Computer-Science.Algorithm-Design.Sorting-Network-Comparator-Count-and-Depth
  - Computer-Science.Algorithm-Design.Algorithm-Complexity
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第1問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065647id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2006_8_ci_istmajor_all.pdf)。

### 日本語

下左図は，$2$ 入力 $2$ 出力の比較器であり，大きさ $2$ のソーティングネットワークでもある。入出力の接続部は黒丸●で表現されている。比較器に左から数を $2$ つ入力すると，小さい数を上から，大きい数を下から右方向へそれぞれ出力する。$2$ 数が等しい場合には，同じ数を上下から出力する。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p1.png" width="600" alt=""/>
</figure>

以下ではこの比較器を組み合わせることで，大きさ $n$ のソーティングネットワークを構成することを考える。大きさ $n$ のソーティングネットワークには，入力線が $n$ 本あり，左端から $n$ 個の整数を入力すると，上から下に昇順に整列して右端から出力する。
ある比較器の出力が別の比較器の入力となっている場合は，その二つの比較は $1$ ステップでの同時実行はできない。たとえば，上右図においては，比較器 $1$ と $2$ は同時に $1$ ステップで実行することができるが，比較器 $3$ は比較器 $1$ と $2$ の出力を入力とするため，別に $1$ ステップ必要であり，全体で $2$ ステップかかる。

(1) 下記のように配線すると，$3$ つの入力は $4$ ステップの実行の後，右端で必ず昇順に出力されることを示しなさい。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p2.png" width="600" alt=""/>
</figure>

(2) 比較器の個数が $O(n^2)$ となる大きさ $n$ のソーティングネットワークを大きさ $n-1$ のソーティングネットワークから帰納的に構成する方法を一つ示し，正しさを説明した上で，必要な比較器の個数を $n$ の式で表しなさい。

(3) (2) で構成した大きさ $n$ のソーティングネットワークにおいて，同時に実行できる比較を $1$ ステップで実行する場合，全体でかかるステップ数を $n$ で表しなさい。

(4) 同時に実行できる比較を $1$ ステップで実行する場合を考える。大きさ $4$ のソーティングネットワークのステップ数の最小数は $3$ であることが知られている。そのような大きさ $4$ のソーティングネットワークを $1$ つ構成し，ステップ数が $3$ であること，また，正しくソーティングできることを説明しなさい。

### English
The left figure below shows a sorting network of size 2. The network has a "comparator module" that has two inputs, represented as lines coming into the module from left, and two outputs, represented as lines going out to right. Note that the connecting points of input/ouptut are indicated by the black dots $\bullet$. The upper output is the smaller of the two inputs and the lower output is the larger. When the 2 values are the same, the value is output from both lines.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p1.png" width="600" alt=""/>
</figure>

We consider a problem of constructing a sorting network of size $n$. A sorting network of size $n$ has $n$ lines and multiple comparator modules. The $n$ numbers are given at the left end and the network sorts them in the increasing order from top to bottom and outputs them from the right end.
Comparisons of two modules of which one's output is another's input cannot be executed simultaneously in an execution step. For example, in the right figure above, the comparisons of modules 1 and 2 can be executed simultaneously in a step, but another step is required for the comparison by module 3, because the outputs of modules 1 and 2 are the inputs of module 3.

(1) Explain that the sorting network of size 3 as in the following figure outputs any 3 numbers in the increasing order.


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_1_p2.png" width="600" alt=""/>
</figure>

(2) Show how to construct a sorting network of size $n$ inductively from a sorting network of size $n-1$, using in total $O(n^2)$ comparator modules. Describe the exact number of comparator modules as a function of $n$.

(3) As regards your answer of (2), if we allow simultaneous operations of comparator modules in a step, how many steps are required to sort $n$ inputs?

(4) Consider the case of executing multiple comparisons simultaneously. It is known that the sorting network of size 4 can be executed in 3 steps. Construct such a sorting network of size 4 and explain the correctness of your answer.

### 题目描述

题图左侧给出一个双输入、双输出比较器，也可视为规模为 2 的排序网络；黑点表示输入、输出连接点。两个数从左侧输入后，较小值从右侧上方输出，较大值从右侧下方输出；若二者相等，上下均输出该值。

用这种比较器构造规模为 $n$ 的排序网络。网络有 $n$ 条输入线，从左侧输入 $n$ 个整数，右侧必须按从上到下的升序输出。若某比较器的输出是另一比较器的输入，两次比较不能在同一步同时执行；彼此无依赖的比较器可以并行。如题图右侧的比较器 1、2 可在一步内同时执行，比较器 3 依赖它们的输出，故整个过程共需两步。

1. 证明原文第二幅图的接线能使三个输入在执行 4 步后必然按升序输出。
2. 给出一种从规模 $n-1$ 的排序网络归纳构造规模 $n$ 排序网络的方法，使比较器总数为 $O(n^2)$；说明构造正确性，并写出比较器数量关于 $n$ 的精确表达式。
3. 对第 2 问构造的网络，若所有可并行的比较均在同一步执行，写出总步数关于 $n$ 的表达式。
4. 已知规模为 4 的排序网络最少可用 3 步完成。构造一个这样的网络，并说明其步数确为 3 且能正确排序。


## **Kai**

比較器 $C_{ij}$ は第 $i,j$ 線（$i<j$）の値を昇順に並べるものとする。

### (1)

図の比較器は左から $C_{12},C_{23},C_{13},C_{12}$ である。入力を $(x,y,z)$ とし、

$$u=\min(x,y),\quad v=\max(x,y),\quad w=\min(v,z),\quad M=\max(v,z)$$

とおくと、最初の2段の出力は $(u,w,M)$ となる。$u\le v\le M$ なので3段目の $C_{13}$ は値を変えない。最後の $C_{12}$ により $(\min(u,w),\max(u,w),M)$ となり、$u,w\le M$ より全体が昇順である。等号がある場合も同じ証明が使える。図では各比較器が直前の比較器の出力を使うため、実行には4ステップを要する。

### (2)

最初の $n-1$ 本に既に構成したネットワーク $S_{n-1}$ を置き、その後ろに

$$C_{n-1,n},\ C_{n-2,n-1},\ldots,\ C_{1,2}$$

をこの順で追加して $S_n$ とする。これは整列済みの $n-1$ 個に最後の値を挿入する操作である。比較を下から上へ進めると、右側（下側）へ出た値は、まだ残っている挿入対象以上であり、既に確定した下側の値以下になる。この不変条件から全線が昇順になる。

比較器数は $N(1)=0$, $N(n)=N(n-1)+(n-1)$ なので、

$$\boxed{N(n)=\sum_{k=2}^n(k-1)=\frac{n(n-1)}2}.$$

### (3)

$S_k$ を作る際に追加した比較器 $C_{i,i+1}$ を $C^{(k)}_i$ と書く。各線の依存関係を保ちながら、

$$C^{(k)}_i\text{ を第 }2k-i-2\text{ ステップに実行する}\qquad(1\le i<k\le n)$$

ことができる。同時刻の比較器の添字は2ずつ離れており、使用する線は重ならない。例えば $n=4$ の時間表は次の通り。

| ステップ | 実行する比較器 |
|---|---|
| 1 | $C^{(2)}_1$ |
| 2 | $C^{(3)}_2$ |
| 3 | $C^{(3)}_1,\ C^{(4)}_3$ |
| 4 | $C^{(4)}_2$ |
| 5 | $C^{(4)}_1$ |

最終段は $C^{(n)}_1$ なので、$n\ge2$ に対して

$$\boxed{D(n)=2n-3}.$$

これは最早実行時刻でもある。$C^{(n)}_{n-1}$ へ至る依存鎖に $n-1$ 段、その後の $C^{(n)}_{n-2},\ldots,C^{(n)}_1$ に $n-2$ 段が必要だからである。$n=1$ では0ステップとなる。

### (4)

次の5比較器を3層に配置する。

| ステップ | 比較器 |
|---|---|
| 1 | $C_{12},\ C_{34}$ |
| 2 | $C_{13},\ C_{24}$ |
| 3 | $C_{23}$ |

1層目の出力を $(a,b,c,d)$（$a\le b$, $c\le d$）とする。2層目の出力は

$$(\min(a,c),\ \min(b,d),\ \max(a,c),\ \max(b,d)).$$

第1成分は4値全体の最小、第4成分は最大である。したがって残る第2、第3成分だけを3層目で並べればよい。各層内の比較器は別の線を使い、層間には依存があるため深さは3である。
