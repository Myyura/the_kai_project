---
sidebar_label: '2023年8月実施 専門基礎A [A-3]'
tags:
  - Kyoto-University
  - Computer-Science.Information-Theory.Source-Coding
  - Computer-Science.Information-Theory.Huffman-Coding
  - Computer-Science.Information-Theory.Channel-Coding
  - Computer-Science.Information-Theory.Cyclic-Code
---
# 京都大学 情報学研究科 通信情報システム専攻 2023年8月実施 専門基礎A \[A-3\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e), 祭音Myyura (assisted by ChatGPT 5.4 Thinking)

## **Description**
**Answer all the following questions.**

### (1)
$S_A$ and $S_B$ are independent and stationary memoryless information sources.  
$S_A$ generates information symbols 0 and 1 with probabilities $2/3$ and $1/3$, respectively, while $S_B$ generates 0 and 1 with probabilities $4/5$ and $1/5$, respectively. Answer the following questions. $\log_2 3 = 1.6$ and $\log_2 5 = 2.3$ may be used.

* (a) Describe the definition of compact code.
* (b) Find the value of the entropy of $S_A$.
* (c) Find a binary Huffman code for the second extension of $S_A$, and the expected codeword length per symbol.
* (d) An information source $S_X$ has two states and generates information symbols by following $S_A$ and $S_B$ when its state is $s_A$ and $s_B$, respectively. $S_X$ transits from a state to the other state when it generates 1. Draw the state diagram of $S_X$.
* (e) Find the stationary distribution of $S_X$ in Question (d).
* (f) Find the value of the entropy of $S_X$ in Question (d).

### (2)

Answer the following questions related to channel coding.  
Let $C$ be the binary cyclic code of length 7 that has a generator polynomial

$$
G(x)=x^4+x^3+x^2+1.
$$

* (a) Find all codeword polynomials of $C$.
* (b) Find the codeword polynomial for the message polynomial $x^2+1$.
* (c) Draw a division circuit by $G(x)$.
* (d) Explain how to detect errors by $C$.

### 题目描述

回答全部问题。

1. $S_A,S_B$ 是相互独立的平稳无记忆信源。$S_A$ 以概率 $2/3,1/3$ 产生 $0,1$；$S_B$ 以概率 $4/5,1/5$ 产生 $0,1$。可使用 $\log_2 3=1.6$、$\log_2 5=2.3$。
   1. 说明紧致码（compact code）的定义。
   2. 求 $S_A$ 的熵。
   3. 为 $S_A$ 的二次扩展构造二元 Huffman 码，并求每个原始符号的平均码长。
   4. 信源 $S_X$ 有状态 $s_A,s_B$，在相应状态按 $S_A,S_B$ 产生符号，产生 $1$ 时转到另一个状态。画状态图。
   5. 求 $S_X$ 的平稳分布。
   6. 求 $S_X$ 的熵。
2. 设 $C$ 为长度 7、生成多项式
   $$
   G(x)=x^4+x^3+x^2+1
   $$
   的二元循环码。
   1. 求 $C$ 的所有码字多项式。
   2. 求消息多项式 $x^2+1$ 的码字多项式。
   3. 画出除以 $G(x)$ 的除法电路。
   4. 说明如何用 $C$ 检错。

#### 考点

- **信源编码与 Huffman 码**：说明紧致码性质，对扩展信源构造前缀码并计算归一化平均码长。
- **熵与 Markov 信源**：计算无记忆信源熵，并由两状态转移求平稳分布及熵率。
- **循环码编码**：枚举消息多项式并乘以生成多项式得到全部码字。
- **多项式除法电路与检错**：依据生成多项式设计反馈移位寄存器，并以接收多项式余数是否为零检测错误。

## **Kai**
### (1)
#### (a)
A compact code is a uniquely decodable and instantaneous code with the minimum average codeword length.

#### (b)

$$
\begin{aligned}
H(S_A)&=\sum_i p_i\log_2\frac{1}{p_i} \\
      &=\frac{2}{3}\log_2\frac{3}{2}+\frac{1}{3} \log_2 3 \\
      &=0.93\ \text{bits/symbol}.
\end{aligned}
$$

#### (c) 

$$
P_{00}=\frac{4}{9},\quad
P_{01}=\frac{2}{9},\quad
P_{10}=\frac{2}{9},\quad
P_{11}=\frac{1}{9}.
$$

```text
                   [1.0]
                  /     \
               0 /       \ 1
                /         \
            P00=4/9       [5/9]
                         /     \
                      0 /       \ 1
                       /         \
                   P01=2/9       [3/9]
                                /     \
                             0 /       \ 1
                              /         \
                          P10=2/9     P11=1/9

            P00 = 0
            P01 = 10
            P10 = 110
            P11 = 111
```

Average length per **extended** symbol:

$$
\begin{aligned}
\bar L_{(2)} &= \sum_i p_i l_i \\
&= \frac{4}{9}\cdot 1+\frac{2}{9}\cdot 2+\frac{2}{9}\cdot 3+\frac{1}{9}\cdot 3 \\
&=\frac{17}{9}\ \text{bits/extended-symbol}.
\end{aligned}
$$

Expected codeword length per **symbol**:

$$
\bar L=\frac{\bar L_{(2)}}{2}=\frac{17}{18}\ \text{bits/symbol}.
$$

#### (d)

```text
s_A --0 (2/3)--> s_A
s_A --1 (1/3)--> s_B

s_B --0 (4/5)--> s_B
s_B --1 (1/5)--> s_A
```

#### (e)

$$
\begin{cases}
\frac{2}{3}\lambda_A+\frac{1}{5}\lambda_B=\lambda_A\\
\frac{1}{3}\lambda_A+\frac{4}{5}\lambda_B=\lambda_B\\
\lambda_A+\lambda_B=1
\end{cases}
\Rightarrow
\begin{cases}
\lambda_A=\frac{3}{8}\\
\lambda_B=\frac{5}{8}
\end{cases}
$$

#### (f)
The entropy rate is the stationary weighted average of the entropies in each state:

$$
H_X=\lambda_A H(S_A)+\lambda_B H(S_B).
$$

We already have

$$
H(S_A)\approx 0.933.
$$

Now

$$
H(S_B)
=-\frac45\log_2\frac45-\frac15\log_2\frac15
=\frac45\log_2\frac54+\frac15\log_2 5.
$$

Using $\log_2 5=2.3$,

$$
\log_2\frac54=\log_2 5-\log_2 4 = 2.3-2=0.3,
$$

so

$$
H(S_B)=\frac45\cdot 0.3+\frac15\cdot 2.3
=0.24+0.46
=0.70.
$$

Therefore,

$$
H_X=\frac38\cdot 0.933+\frac58\cdot 0.70
\approx 0.788\ \text{bits/symbol}.
$$

### (2) 
#### (a)
Since $\deg G(x)=4$ and the code length is 7, the message polynomial has degree at most 2:

$$
m(x)=a_2x^2+a_1x+a_0.
$$

Each codeword is

$$
c(x)=m(x)G(x).
$$

Thus the 8 codeword polynomials are:

$$
0
$$

$$
G(x)=x^4+x^3+x^2+1
$$

$$
xG(x)=x^5+x^4+x^3+x
$$

$$
(x+1)G(x)=x^5+x^2+x+1
$$

$$
x^2G(x)=x^6+x^5+x^4+x^2
$$

$$
(x^2+1)G(x)=x^6+x^5+x^3+1
$$

$$
(x^2+x)G(x)=x^6+x^3+x^2+x
$$

$$
(x^2+x+1)G(x)=x^6+x^4+x+1
$$

Equivalently, in 7-bit vector form (from $x^6$ to $x^0$):

$$
0000000,\ 0011101,\ 0111010,\ 0100111,\\ 1110100,\ 1101001,\ 1001110,\ 1010011.
$$

#### (b)

$$
c(x)=(x^2+1)G(x)
=(x^2+1)(x^4+x^3+x^2+1).
$$

Over GF(2),

$$
c(x)=x^6+x^5+x^3+1.
$$

$$
\boxed{c(x)=x^6+x^5+x^3+1}
$$

Its 7-bit vector form is

$$
\boxed{1101001}.
$$

#### (c)

<div align="center">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202308_senmonkiso_A_3_p1.png" width="500">
</div>

The division circuit uses 4 delay elements because  $\deg G(x)=4$, and the feedback taps correspond to the nonzero coefficients of $1, x^2, x^3$.

#### (d)
Explain how to detect errors by $C$:

Given a received polynomial (or 7-bit vector) $R(x)$, divide $R(x)$ by $G(x)$ over GF(2) and compute the remainder (syndrome)

$$
S(x)=R(x)\ \bmod\ G(x).
$$

If $S(x)=0$, then $R(x)$ is a valid codeword (no error detected).
If $S(x)\neq 0$, then an error is detected.
