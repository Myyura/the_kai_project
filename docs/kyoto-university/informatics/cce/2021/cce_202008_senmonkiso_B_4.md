---
sidebar_label: "2020年8月実施 専門基礎B [B-4]"
tags:
  - Kyoto-University
  - Digital-Circuit
---
# 京都大学 情報学研究科 通信情報システム専攻 2020年8月実施 専門基礎B \[B-4\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
**Answer all the following questions.**

### (1)

Suppose that we design a circuit that compares two 2-digit binary integers $A = (a_1 a_0)_2$ and $B = (b_1 b_0)_2$ represented by two 2-bit inputs $(a_1, a_0)$ and $(b_1, b_0)$.
It outputs 1 in the case of $A > B$, and outputs $0$ in the case of $A \le B$.
Answer the following questions.

* (a) Give a minimal sum-of-products expression of output $x$.
* (b) Give a minimal product-of-sums expression of output $x$.
* (c) Derive a logic circuit that realizes $x$ with the minimum number of 3-input NAND gates only. Assume $a_1, a_0, b_1, b_0$ and their complements $\overline{a_1}, \overline{a_0}, \overline{b_1}, \overline{b_0}$ together with logic values $0$ and $1$ are available as inputs.

### (2)
Suppose that we design a Mealy-type synchronous sequential circuit that has a 1-bit input $x$ and a 1-bit output $y$.
The circuit outputs $1$ when the value of the current input is different from the value at one clock earlier.
It outputs $0$ when the value of the current input is the same as the value at one clock earlier.
At the time the circuit starts operating, it is assumed that the value of the input at one clock earlier is $0$.
For example, when 010110 is fed to the circuit, it produces 011101.
Answer the following questions.

* (a) Derive a state transition diagram of the circuit.
* (b) Show the state transition table and the output table with the minimum number of states. Explain how you verified that the number of states is minimal.
* (c) We would like to implement the circuit with the minimum number of D flip-flops. Derive the excitation function(s) of D flip-flop(s) in a minimal sum-of-products form. Here, the initial value of a D flip-flop is $0$, and logic variables of the input and the output of a D flip-flop are $d$ and $q$, respectively. If multiple flip-flops are used, distinguish them by subscripts.
* (d) Derive the output $y$ in a minimal sum-of-products form.

### (3)

Suppose that we design a Mealy-type synchronous sequential circuit that restores the input $x$ from the output $y$ of the sequential circuit in Question (2). Answer the following questions.

* (a) Derive a state transition diagram of the circuit.
* (b) Show the state transition table and the output table with the minimum number of states. Explain the state transition and the output sequence for the input sequence of 011101.

## **Kai**
### (1)

#### (a)
Derive the corresponding K-map:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p1.png" width="400" alt=""/>
</figure>

$$
x = a_0\overline{b_1}\overline{b_0} + a_1\overline{b_1} + a_1 a_0\overline{b_0}
$$

#### (b)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p2.png" width="400" alt=""/>
</figure>

$$
x = (a_1 + a_0)(a_1 + \overline{b_0})(a_1 + \overline{b_1})(a_0 + \overline{b_1})(\overline{b_1} + \overline{b_0})
$$

#### (c)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p3.png" width="400" alt=""/>
</figure>

### (2)
#### (a)
State definition:
- S0: the previous input was 0
- S1: the previous input was 1

Initial state: S0

State transition diagram:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p4.png" width="400" alt=""/>
</figure>

#### (b)

<div align="center">
<table style="width: 70%; text-align: center;">
<thead>
<tr>
<th>Input x</th>
<th>Current state</th>
<th>Next state</th>
<th>Output y</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>S0</td>
<td>S0</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>S0</td>
<td>S1</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>S1</td>
<td>S0</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>S1</td>
<td>S1</td>
<td>0</td>
</tr>
</tbody>
</table>
</div>

**Minimum-state verification:**
For the same input, the outputs in S0 and S1 are different (for example, when x=0, the outputs are 0 and 1, respectively).
Hence the two states are distinguishable and cannot be merged.
Therefore, the number of states is minimal (2 states).

#### (c)
K-map for $d$:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p5.png" width="200" alt=""/>
</figure>

Minimal sum-of-products:

$$
d = x
$$

#### (d) 
K-map for $y$:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p6.png" width="200" alt=""/>
</figure>

$$
y = \overline{q}x + q\overline{x}
$$

(Equivalently, $y = x \oplus q$.)

### (3)
#### (a) 
State definition:
- S0': the previous value of x was 0
- S1': the previous value of x was 1

Initial state: S0'

Input: $y$
Output: $x$

State transition diagram:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/cce_202008_senmonkiso_B_4_p7.png" width="400" alt=""/>
</figure>

#### (b)

<div align="center">
<table style="width: 70%; text-align: center;">
<thead>
<tr>
<th>Input y</th>
<th>Current state</th>
<th>Next state</th>
<th>Output x</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>S0'</td>
<td>S0'</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>S0'</td>
<td>S1'</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>S1'</td>
<td>S1'</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>S1'</td>
<td>S0'</td>
<td>0</td>
</tr>
</tbody>
</table>
</div>

**Minimum-state verification:**
For the same input, the outputs in S0' and S1' are different (for example, when y=0, the outputs are 0 and 1, respectively).
Hence the two states are distinguishable and cannot be merged.
Therefore, the number of states is minimal (2 states).

#### (c) 
Initial state: S0'

<div align="center">
<table style="width: 70%; text-align: center;">
<thead>
<tr>
<th>Input y</th>
<th>Current state</th>
<th>Next state</th>
<th>Output x</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>S0'</td>
<td>S0'</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>S0'</td>
<td>S1'</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>S1'</td>
<td>S0'</td>
<td>0</td>
</tr>
<tr>
<td>1</td>
<td>S0'</td>
<td>S1'</td>
<td>1</td>
</tr>
<tr>
<td>0</td>
<td>S1'</td>
<td>S1'</td>
<td>1</td>
</tr>
<tr>
<td>1</td>
<td>S1'</td>
<td>S0'</td>
<td>0</td>
</tr>
</tbody>
</table>
</div>

Output sequence:

$$
010110
$$
