---
sidebar_label: "2022年8月実施 専門基礎B [B-4]"
tags:
  - Kyoto-University
  - Digital-Circuit
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎B \[B-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
Answer all the following questions. An overbar, `·`, and `+` denote logical negation, logical and, and logical or, respectively.

### (1)
Answer the following questions on the logic function $f$ defined below.

$$
f = (a + b + c + d)\cdot(\bar{a} + b + \bar{c} + d)\cdot(\bar{a} + b + c)\cdot(a + \bar{b} + \bar{c})\cdot(a + \bar{c} + d)
$$

(a) Give all minimum sum-of-products expressions of $f$.

(b) Give all minimum product-of-sums expressions of $f$.

(c) Derive a logic circuit that realizes $f$ with the minimum number of 3-input NOR gates only. Assume $a, b, c, d$ and their complements $\bar{a}, \bar{b}, \bar{c}, \bar{d}$ are available as inputs.

(d) Assume logic functions $g = b + d$ and $r = \bar{a}\cdot\bar{c}\cdot d$. Among all the logic functions of $h$ that satisfy

$$
f = (g \cdot h) + r,
$$

derive a minimum sum-of-products expression of a logic function that has the minimum number of product terms with the minimum number of literals in its minimum sum-of-products form.

### (2)
We design a sequential circuit with a 1-bit input $u$ and a 3-bit output $(q_2, q_1, q_0)$ using three D flip-flops. The outputs of the D flip-flops are $q_2, q_1,$ and $q_0$, and they are the outputs of the sequential circuit as they are. When $u = 1$, this circuit operates as a binary down counter whose cycle is 8. Namely, $(q_2, q_1, q_0)$ change like

$$
(1,1,1) \rightarrow (1,1,0) \rightarrow (1,0,1) \rightarrow \cdots \rightarrow (0,0,1) \rightarrow (0,0,0) \rightarrow (1,1,1).
$$

When $u = 0$, the circuit operates as a shift register, where $q_0$ moves to $q_2$, $q_2$ to $q_1$, and $q_1$ to $q_0$. For example, $(q_2, q_1, q_0)$ change like

$$
(1,0,0) \rightarrow (0,1,0) \rightarrow (0,0,1) \rightarrow (1,0,0).
$$

Answer the following questions.

(a) Derive a state transition table.

(b) Let $d_2, d_1,$ and $d_0$ be the D input of the D flip-flops that output $q_2, q_1,$ and $q_0$, respectively. We derive $d_2, d_1,$ and $d_0$ as logic functions of $q_2, q_1, q_0,$ and $u$. Show the minimum sum-of-products expressions of $d_2, d_1,$ and $d_0$.

## **Kai**
### (1)
#### (a)

**Derive the K-map of $\bar{f}$ and $f$:**

| &nbsp; | &nbsp; |
| :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_B_4_p1.png" width="250"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_B_4_p2.png" width="250"> |
| $\bar{f} = \bar{b}\bar{d} + \bar{a}bc + a\bar{b}\bar{c}$ | $f = b\bar{c} + ab + \bar{a}\bar{b}d + \bar{b}cd$ |

#### (b)
**Simplified POS expression for f:**

$$
f = (b + d)(a + \bar{b} + \bar{c})(\bar{a} + b + c) 
$$

#### (c)
From part (b), the minimum POS form is

$$
f=(b+d)(a+\bar{b}+\bar{c})(\bar{a}+b+c)
$$

Using a **two-level NOR–NOR implementation**, let

$$
x_1=\overline{b+d}=\operatorname{NOR}(b,d,d)
$$

$$
x_2=\overline{a+\bar{b}+\bar{c}}=\operatorname{NOR}(a,\bar{b},\bar{c})
$$

$$
x_3=\overline{\bar{a}+b+c}=\operatorname{NOR}(\bar{a},b,c)
$$

Then the output is

$$
f=\overline{x_1+x_2+x_3}=\operatorname{NOR}(x_1,x_2,x_3)
$$

Therefore, the logic circuit is realized by **four 3-input NOR gates** only.


#### (d)
**Derive the corresponding K-map:**

| &nbsp; | &nbsp; | &nbsp; |
| :---: | :---: | :---: |
| <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_B_4_p4.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_B_4_p5.png" width="200"> | <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202208_senmonkiso_B_4_p6.png" width="200"> |

**Expression for h:**

$$
h = \bar{a}\bar{b} + b\bar{c} + ac
$$

### (2)
Since D flip-flops are used, the D inputs are exactly the next-state bits:

$$
d_2=q_2^{+},\qquad d_1=q_1^{+},\qquad d_0=q_0^{+}
$$

We use the corrected state behavior:

* When (u=1): 3-bit **binary down counter**
* When (u=0): **circular shift register**

$$
  (q_2,q_1,q_0)\to(q_0,q_2,q_1)
$$

#### (a) State transition table

| Present state $(q_2q_1q_0)$ | $u=0$ next state | $u=1$ next state |
| --------------------------- | ---------------- | ---------------- |
| 000                         | 000              | 111              |
| 001                         | 100              | 000              |
| 010                         | 001              | 001              |
| 011                         | 101              | 010              |
| 100                         | 010              | 011              |
| 101                         | 110              | 100              |
| 110                         | 011              | 101              |
| 111                         | 111              | 110              |

So we obtain the truth table for $(d_2,d_1,d_0)$.

#### (b)
**K-map for $d_2$**

1-cells:

$$
d_2=\Sigma m(1,2,6,10,11,13,14,15)
$$

Rows: $q_2q_1=00,01,11,10$
Columns: $q_0u=00,01,11,10$

| $q_2q_1 \backslash q_0u$ | 00 | 01 | 11 | 10 |
| ------------------------ | -: | -: | -: | -: |
| 00                       |  0 |  1 |  0 |  1 |
| 01                       |  0 |  0 |  0 |  1 |
| 11                       |  0 |  1 |  1 |  1 |
| 10                       |  0 |  0 |  1 |  1 |

Grouping results:

* column $10$  $\rightarrow q_0\bar u$
* block $(11,10)\times (11,10) \rightarrow q_2q_0$
* pair on row $11$, columns $01,11$  $\rightarrow q_2q_1u$
* single cell $(00,01) \rightarrow \bar q_2\bar q_1\bar q_0u$

$$
\boxed{d_2=q_0\bar u+q_2q_0+q_2q_1u+\bar q_2\bar q_1\bar q_0u}
$$

**K-map for $d_1$**

1-cells:

$$
d_1=\Sigma m(1,7,8,9,10,12,14,15)
$$

Rows: $q_2q_1=00,01,11,10$
Columns: $q_0u=00,01,11,10$

| $q_2q_1 \backslash q_0u$ | 00 | 01 | 11 | 10 |
| ------------------------ | -: | -: | -: | -: |
| 00                       |  0 |  1 |  0 |  0 |
| 01                       |  0 |  0 |  1 |  0 |
| 11                       |  1 |  0 |  1 |  1 |
| 10                       |  1 |  1 |  0 |  1 |

Grouping results:

* block $(11,10)\times (00,10) \rightarrow q_2\bar u$
* pair in column $01$, rows $00,10 \rightarrow \bar q_1\bar q_0u$
* pair in column $11$, rows $01,11 \rightarrow q_1q_0u$

$$
\boxed{d_1=q_2\bar u+\bar q_1\bar q_0u+q_1q_0u}
$$

**K-map for $d_0$**

1-cells:

$$
d_0=\Sigma m(1,4,5,6,9,12,13,14)
$$

Rows: $q_2q_1=00,01,11,10$
Columns: $q_0u=00,01,11,10$

| $q_2q_1 \backslash q_0u$ | 00 | 01 | 11 | 10 |
| ------------------------ | -: | -: | -: | -: |
| 00                       |  0 |  1 |  0 |  0 |
| 01                       |  1 |  1 |  0 |  1 |
| 11                       |  1 |  1 |  0 |  1 |
| 10                       |  0 |  1 |  0 |  0 |

Grouping results:

* column $01 \rightarrow \bar q_0u$
* block $(01,11)\times (00,10) \rightarrow q_1\bar u$

$$
\boxed{d_0=\bar q_0u+q_1\bar u}
$$
