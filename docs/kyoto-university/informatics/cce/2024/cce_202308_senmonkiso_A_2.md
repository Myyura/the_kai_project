---
sidebar_label: '2023年8月実施 専門基礎A [A-2]'
tags:
  - Kyoto-University
  - Electrical-Electronic.Digital-Logic.Sequential-Circuit
  - Computer-Science.Formal-Languages.Moore-Machine
  - Computer-Science.Formal-Languages.Mealy-Machine
---
# 京都大学 情報学研究科 通信情報システム専攻 2023年8月実施 専門基礎A \[A-2\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2023_cce.pdf)
**Answer all the following questions.** Note that operators $\overline{\phantom{x}}$, $\cdot$, $+$, and $\oplus$ denote logical negation, logical and, logical or, and exclusive or, respectively.

### (1)

Answer the following questions on the logic function $f$ defined below.

$$
f = ((\bar{a} + \bar{b} + d)\cdot(\bar{b} + \bar{c} + \bar{d})\cdot(a + \bar{c} + d)) \oplus (\bar{c}\cdot d + \bar{a}\cdot c\cdot \bar{d})
$$

(a) Give all minimum sum-of-products expressions of $f$.

(b) Derive a logic circuit that realizes $f$ with the minimum number of 3-input NAND gates only. Assume $a, b, c, d$ and their complements $\bar{a}, \bar{b}, \bar{c}, \bar{d}$ are available as inputs.

(c) Assume logic functions

$$
g = a\cdot \bar{b}\cdot d + \bar{a}\cdot b\cdot c\cdot \bar{d}
$$

and

$$
r = (\bar{a} + \bar{b} + c + d)\cdot(\bar{a} + b + c + \bar{d})\cdot(\bar{a} + \bar{b} + \bar{c} + d).
$$

Among all the logic functions $h$ that satisfy

$$
f = (g + h)\cdot r,
$$

derive a minimum sum-of-products expression of a logic function that has the minimum number of product terms with the minimum number of literals in its minimum sum-of-products form. If there is no logic function $h$ that satisfies $f = (g + h)\cdot r$, state that $h$ does not exist.

### (2)

We design a sequential circuit that decodes the variable-length codes defined in Table 1. This sequential circuit has a 1-bit input $x$ and a 3-bit output $(z_2, z_1, z_0)$. The variable-length codes are given to input $x$ sequentially from the leftmost bit. Every time a given variable-length code is recognized, the corresponding fixed-length code is outputted to $(z_2, z_1, z_0)$ in parallel. When there is no output of the fixed-length code, the output is $(z_2, z_1, z_0) = (0, 0, 0)$. The initial state is the state where neither 0 nor 1 has been previously inputted to $x$. Answer the following questions.

### Table 1

| fixed-length code | variable-length code |
|---|---|
| 001 | 0 |
| 010 | 10 |
| 011 | 110 |
| 100 | 1110 |
| 101 | 1111 |

(a) Derive a state transition diagram when we design this sequential circuit as a Moore-type sequential circuit that outputs the fixed-length code in the next cycle after the variable-length code is recognized.

(b) Derive a state transition diagram when we design this sequential circuit as a Mealy-type sequential circuit that outputs the fixed-length code immediately after the variable-length code is recognized.

(c) Regarding the state transition diagram derived in (b), show the state transition table and the output table with the minimum number of states. Explain how you verified that the number of states is minimal.

(d) We implement a sequential circuit corresponding to the state transition table and the output table derived in (c) with the minimum number of D flip-flops. Derive the excitation function(s) of the D flip-flop(s) and the output functions of $(z_2, z_1, z_0)$ in a minimal sum-of-products form. Here, the initial value of a D flip-flop is 0, and logic variables of the input and the output of a D flip-flop are $d$ and $q$, respectively. If multiple flip-flops are used, distinguish them by subscripts.

### 题目描述

回答全部问题。$\overline{\phantom{x}}$、$\cdot$、$+$、$\oplus$ 分别表示逻辑非、与、或、异或。

1. 对

   $$
   f=((\bar a+\bar b+d)(\bar b+\bar c+\bar d)(a+\bar c+d))
   \oplus(\bar c d+\bar a c\bar d)
   $$

   回答：
   1. 给出 $f$ 的所有最简与或式。
   2. 仅用三输入 NAND 门实现 $f$，使门数最少；可直接使用 $a,b,c,d$ 及其反变量。
   3. 设

      $$
      g=a\bar b d+\bar a b c\bar d,
      $$

      $$
      r=(\bar a+\bar b+c+d)(\bar a+b+c+\bar d)
      (\bar a+\bar b+\bar c+d).
      $$

      在所有满足 $f=(g+h)r$ 的 $h$ 中，求一种最简与或式，使乘积项数最少，并在此基础上文字数最少；若不存在这样的 $h$，明确说明。
2. 设计一个可变长码译码时序电路，输入为串行 1 位 $x$，输出为并行 3 位 $(z_2,z_1,z_0)$。码字从最左位开始输入；每识别出一个可变长码就输出对应定长码，否则输出 `000`。初态为尚未输入任何位。

   | 定长码 | 可变长码 |
   |---|---|
   | `001` | `0` |
   | `010` | `10` |
   | `011` | `110` |
   | `100` | `1110` |
   | `101` | `1111` |

   1. 若用 Moore 电路，并在识别码字的下一周期输出，画状态转移图。
   2. 若用 Mealy 电路，并在识别码字后立即输出，画状态转移图。
   3. 对第 2 小问的图，用最少状态写出状态转移表和输出表，并说明如何验证状态数最少。
   4. 用最少 D 触发器实现第 3 小问电路。触发器初值为 $0$，D 输入和 Q 输出分别记作 $d,q$，多个时加下标。求各激励函数和 $z_2,z_1,z_0$ 输出函数的最简与或式。

## **Kai**
### (1)
#### (a) Minimum sum-of-products expression of $f$

Let $f = x \oplus y$, derive the corresponding K-map for $x, y, f$.

| &nbsp; | &nbsp; | &nbsp; |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p1.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p2.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p3.png" width="200" /> |

The minimum sum-of-products expression is

$$
\boxed{f=\bar{a}\bar{d}+\bar{b}\bar{d}+\bar{b}c}
$$

This is the unique minimum SOP form.

#### (b) Realization using the minimum number of 3-input NAND gates

From part (a),

$$
f=\bar{a}\bar{d}+\bar{b}\bar{d}+\bar{b}c
$$

Using a two-level NAND-NAND implementation with only 3-input NAND gates:

$$
N_1=\operatorname{NAND}(\bar{a},\bar{d},\bar{d})=\overline{\bar{a}\bar{d}}
$$

$$
N_2=\operatorname{NAND}(\bar{b},\bar{d},\bar{d})=\overline{\bar{b}\bar{d}}
$$

$$
N_3=\operatorname{NAND}(\bar{b},c,c)=\overline{\bar{b}c}
$$

Then

$$
\boxed{
f=\operatorname{NAND}(N_1,N_2,N_3)
}
$$

Therefore, the minimum number of 3-input NAND gates is $\boxed{4}$

The 1-inputs $0011,0100,1000$ cannot be covered pairwise by one implicant, so at least three product terms are required. To justify minimality, note that no literal is true on every 1-input and no entire literal half-space has output 1. The last NAND therefore cannot receive a primary literal. With at most three gates, its inputs must come from the preceding one or two gates. Parallel preceding gates give at most two product terms. If the first gate is $\overline T$ and the second is $\overline{\overline T P}$, feeding both into the last gate gives $T+P$, again at most two terms. Feeding only the second gives $\overline T P$: nonconstant $P$ forces a common literal on all 1-inputs, while constant $P$ gives the complement of one product, contrary to the half-space property. Thus three gates cannot suffice.

#### (c) Minimum SOP expression of $h$

Derive the corresponding K-map for $g, h, r$.

| &nbsp; | &nbsp; | &nbsp; |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p4.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p5.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p6.png" width="200" /> |

We seek $h$ satisfying

$$
f=(g+h)\cdot r
$$

Among all such $h$, the one whose minimum SOP form has the minimum number of product terms and then the minimum number of literals is

$$
\boxed{h=\bar{d}+\bar{b}c}
$$

### (2)

To decode the variable-length codes

- $0 \to 001$
- $10 \to 010$
- $110 \to 011$
- $1110 \to 100$
- $1111 \to 101$

we use prefix states corresponding to the partial inputs already seen.

Let:

- $S$ = initial state (no pending prefix)
- $A$ = prefix `1`
- $B$ = prefix `11`
- $C$ = prefix `111`

#### (a) Moore-type sequential circuit
**State definitions**
- S0/000 : initial state
- S1/000 : prefix `1` has been read
- S11/000 : prefix `11` has been read
- S111/000 : prefix `111` has been read
- O001/001 : output state for code `001`
- O010/010 : output state for code `010`
- O011/011 : output state for code `011`
- O100/100 : output state for code `100`
- O101/101 : output state for code `101`

**State transitions**

```text
S0/000   --0--> O001/001
S0/000   --1--> S1/000

S1/000   --0--> O010/010
S1/000   --1--> S11/000

S11/000  --0--> O011/011
S11/000  --1--> S111/000

S111/000 --0--> O100/100
S111/000 --1--> O101/101

O001/001 --0--> O001/001
O001/001 --1--> S1/000

O010/010 --0--> O001/001
O010/010 --1--> S1/000

O011/011 --0--> O001/001
O011/011 --1--> S1/000

O100/100 --0--> O001/001
O100/100 --1--> S1/000

O101/101 --0--> O001/001
O101/101 --1--> S1/000
```

<img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p7.png" width="500" />

#### (b) Mealy-type sequential circuit
**State definitions**
- S0 : initial state
- S1 : prefix `1` has been read
- S11 : prefix `11` has been read
- S111 : prefix `111` has been read

**State transitions with outputs**

```text
S0   --0/001--> S0
S0   --1/000--> S1

S1   --0/010--> S0
S1   --1/000--> S11

S11  --0/011--> S0
S11  --1/000--> S111

S111 --0/100--> S0
S111 --1/101--> S0
```

<img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p8.png" width="500" />

#### (c)
Derive the corresponding state transition table:

<div align="center">
<table style="width: 70%; text-align: center;">
  <thead>
    <tr>
      <th>Current State</th>
      <th>Input</th>
      <th>Next State</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>0</td>
      <td>00</td>
      <td>001</td>
    </tr>
    <tr>
      <td>00</td>
      <td>1</td>
      <td>01</td>
      <td>000</td>
    </tr>
    <tr>
      <td>01</td>
      <td>0</td>
      <td>00</td>
      <td>010</td>
    </tr>
    <tr>
      <td>01</td>
      <td>1</td>
      <td>10</td>
      <td>000</td>
    </tr>
    <tr>
      <td>10</td>
      <td>0</td>
      <td>00</td>
      <td>011</td>
    </tr>
    <tr>
      <td>10</td>
      <td>1</td>
      <td>11</td>
      <td>000</td>
    </tr>
    <tr>
      <td>11</td>
      <td>0</td>
      <td>00</td>
      <td>100</td>
    </tr>
    <tr>
      <td>11</td>
      <td>1</td>
      <td>00</td>
      <td>101</td>
    </tr>
  </tbody>
</table>
</div>

For input $x=0$, the four states output $001,010,011,100$, respectively. Hence every pair of states is distinguishable after one input, so four states are necessary and the table is minimal.

#### (d)
Derive the corresponding K-map for $d_1, d_0, Z_2, Z_1, Z_0$:

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p9.png" width="200" /> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p10.png" width="200" /> |
| $d_1 = \bar{q}_1 q_0 x + q_1 \bar{q}_0 x$ | $d_0 = \bar{q}_0 x$ |

| &nbsp; |
| :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_2_p11.png" width="200" /> |
| $Z_2 = q_1 q_0$ |

In the same way, we have:

$$
Z_1 = \bar{q_1}q_0\bar{x} + q_1\bar{q_0}\bar{x}
$$

$$
Z_0 = \bar{q_0}\bar{x} + q_1 q_0 x
$$
