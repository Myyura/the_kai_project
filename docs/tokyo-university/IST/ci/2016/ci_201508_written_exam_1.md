---
sidebar_label: '2015年8月実施 筆記試験 第1問'
tags:
  - Tokyo-University
  - Digital-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2015年8月実施 筆記試験 第1問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
電子部品を使い、$k$進1桁のカウンタを作ろう。ここで$k$は2以上の整数とする。このカウンタはクロック信号 (CLK信号) とイネーブル信号 (EN信号) を入力とし、カウンタ値$c$を出力する (図1)。CLK信号およびEN信号はHとLの2値をとる。CLK信号は図2に示すような周期的信号であり、LからHへの変化をCLK信号の立ち上がりと呼ぶ。カウンタ値は$0 \le c \le k-1$で、起動時に$c=0$に初期化される。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p1.png" width="250" alt=""/>
</figure>

例として2進1桁カウンタを考えよう。このカウンタはCLK信号の立ち上がりの前のカウンタ値を$c$、立ち上がり後のカウンタ値を$c'$とすると、CLK信号の立ち上がり時に
$$
\begin{cases}
\text{EN信号がHなら } c' = (c+1) \bmod 2 \\
\text{EN信号がLなら } c' = c
\end{cases}
$$
となる。ここで$mod$演算子は正の剰余を返す。この2進1桁のカウンタの状態遷移図の例を図3に、状態遷移表の例を表1に示す。ここでS0, S1はそれぞれカウンタ値を0,1とする状態とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p2.png" width="600" alt=""/>
</figure>

以下の設問に答えよ。

(1) CLK信号の立ち上がり時に
$$
\begin{cases}
\text{EN信号がHなら } c' = (c+1) \bmod 3 \\
\text{EN信号がLなら } c' = c
\end{cases}
$$
となるような3進1桁カウンタの状態遷移図および状態遷移表を示せ。状態遷移図と状態遷移表は例と異なるフォーマットを用いてもかまわない。

(2) 設問(1)のカウンタをアップダウンカウンタに拡張しよう。EN信号の代わりにアップダウン信号 (UD信号) を入力とし、CLK信号の立ち上がり時に
$$
\begin{cases}
\text{UD信号がHなら } c' = (c+1) \bmod 3 \\
\text{UD信号がLなら } c' = (c-1) \bmod 3
\end{cases}
$$
となる3進1桁アップダウンカウンタの状態遷移図および状態遷移表を示せ。状態遷移図と状態遷移表は例と異なるフォーマットを用いてもかまわない。

以下の部品を組み合わせ、設問(1)と設問(2)で示したカウンターを実現しよう。部品A, B, C, D, Eの入力、出力を図4に示す。入力値と出力値の関係をそれぞれ表2, 3, 4, 5, 6に記す。部品Eでは、CLK信号の立ち上がり直前の入力Iの値が、立ち上がり後出力Oに設定される。一般に部品A, B, C, D, Eは、それぞれNOT, AND, OR, XOR, D-フリップフロップと呼ばれる。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p3.png" width="700" alt=""/>
</figure>

EN信号、カウンタ値$c$はCLK信号の立ち上がりで変化するとする。まず2進1桁のカウンタの例を示す。2進カウンタ値$c$は0か1なので、$c$を2値信号である$\text{C}_0$信号で表現し、$\text{C}_0$信号は、$c=0$ならL、$c=1$ならHとする。CLK信号の立ち上がり前の信号を$\text{C}_0$、立ち上がり後の信号を$\text{C}_0'$とすると、$\text{C}_0$と$\text{C}_0'$の関係は表7となり、この2進1桁のカウンタは、例えば、図5に示す回路図で実現される。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p4.png" width="250" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p5.png" width="450" alt=""/>
</figure>


以下の設問に答えよ。ただし、全ての部品は十分あり、また全種類を使う必要はない。


(3) 設問(1)で示した3進1桁カウンタを実現するように部品を組み合わせ、回路図を示せ。ここでカウンタ値$c$は2bitで表現すること。通常の論理回路図を描いても良い。

(4) 設問(2)で示した3進1桁アップダウンカウンタを実現するように部品を組み合わせ、回路図を示せ。ここでカウンタ値$c$は2bitで表現すること。通常の論理回路図を描いても良い。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p6.png" width="450" alt=""/>
</figure>

(5) 図6に示すように3進1桁カウンタを組み合わせ、3進3桁のカウンタを実現したい。設問(3)で示した3進1桁のカウンタに新たな出力信号を追加する拡張を行うことで、3進3桁カウンタの部品となるような3進1桁のカウンタを実現し、この3進1桁のカウンタを図示せよ。通常の論理回路図を描いても良い。

## **Description (English) | AI Translated**

Let's make a base-$k$ 1-digit counter using electronic components. Here, let $k$ be an integer of 2 or more. This counter takes a clock signal (CLK signal) and an enable signal (EN signal) as inputs and outputs a counter value $c$ (Figure 1). The CLK signal and EN signal take two values, H and L. The CLK signal is a periodic signal as shown in Figure 2, and the change from L to H is called the rising edge of the CLK signal. The counter value is $0 \le c \le k-1$ and is initialized to $c=0$ at startup.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p1.png" width="250" alt=""/>
</figure>

As an example, let's consider a base-2 1-digit counter. Let $c$ be the counter value before the rising edge of the CLK signal, and $c'$ be the counter value after the rising edge. At the rising edge of the CLK signal:
$$
\begin{cases}
\text{If EN signal is H, } c' = (c+1) \bmod 2 \\
\text{If EN signal is L, } c' = c
\end{cases}
$$
Here, the $mod$ operator returns a positive remainder. An example of the state transition diagram for this base-2 1-digit counter is shown in Figure 3, and an example of the state transition table is shown in Table 1. Here, S0 and S1 are states where the counter value is 0 and 1, respectively.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p2.png" width="600" alt=""/>
</figure>

Answer the following questions.

(1) Show the state transition diagram and state transition table for a base-3 1-digit counter such that at the rising edge of the CLK signal:
$$
\begin{cases}
\text{If EN signal is H, } c' = (c+1) \bmod 3 \\
\text{If EN signal is L, } c' = c
\end{cases}
$$
You may use a format different from the example for the state transition diagram and state transition table.

(2) Let's extend the counter in question (1) to an up-down counter. Taking an up-down signal (UD signal) as input instead of the EN signal, show the state transition diagram and state transition table for a base-3 1-digit up-down counter such that at the rising edge of the CLK signal:
$$
\begin{cases}
\text{If UD signal is H, } c' = (c+1) \bmod 3 \\
\text{If UD signal is L, } c' = (c-1) \bmod 3
\end{cases}
$$
You may use a format different from the example for the state transition diagram and state transition table.

Let's realize the counters shown in questions (1) and (2) by combining the following components. The inputs and outputs of components A, B, C, D, and E are shown in Figure 4. The relationships between input values and output values are described in Tables 2, 3, 4, 5, and 6, respectively. In component E, the value of input I immediately before the rising edge of the CLK signal is set to output O after the rising edge. Generally, components A, B, C, D, and E are called NOT, AND, OR, XOR, and D-Flip-Flop, respectively.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p3.png" width="700" alt=""/>
</figure>

Assume that the EN signal and the counter value $c$ change at the rising edge of the CLK signal. First, an example of a base-2 1-digit counter is shown. Since the base-2 counter value $c$ is 0 or 1, $c$ is represented by a binary signal $\text{C}_0$ signal, where the $\text{C}_0$ signal is L if $c=0$ and H if $c=1$. If the signal before the rising edge of the CLK signal is $\text{C}_0$ and the signal after the rising edge is $\text{C}_0'$, the relationship between $\text{C}_0$ and $\text{C}_0'$ is as shown in Table 7. This base-2 1-digit counter is realized, for example, by the circuit diagram shown in Figure 5.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p4.png" width="250" alt=""/>
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p5.png" width="450" alt=""/>
</figure>

Answer the following questions. Note that there are enough of all components, and it is not necessary to use all types.

(3) Combine the components to realize the base-3 1-digit counter shown in question (1) and show the circuit diagram. Here, the counter value $c$ should be represented by 2 bits. You may draw a standard logic circuit diagram.

(4) Combine the components to realize the base-3 1-digit up-down counter shown in question (2) and show the circuit diagram. Here, the counter value $c$ should be represented by 2 bits. You may draw a standard logic circuit diagram.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201508_1_p6.png" width="450" alt=""/>
</figure>

(5) As shown in Figure 6, we want to combine base-3 1-digit counters to realize a base-3 3-digit counter. Realize a base-3 1-digit counter that serves as a component for the base-3 3-digit counter by extending the base-3 1-digit counter shown in question (3) to add a new output signal, and illustrate this base-3 1-digit counter. You may draw a standard logic circuit diagram.