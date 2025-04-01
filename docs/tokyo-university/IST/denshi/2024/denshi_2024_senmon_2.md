---
sidebar_label: "専門 第2問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2024年度 専門 第2問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Consider designing a binary digital synchronous sequential circuit as follows.

- The circuit has $2$ inputs $(X_1,X_0)$ and $1$ output $(Z)$.
- The inputs $(X_1,X_0)$ represent a character from $A$ to $D$ encoded as $A = (0,0), B = (0,1) , C = (1,0)$ , and $D  = (1,1)$.
- The output $Z$ is $1$ when the last two consecutive inputs are $AA , AC , CB , CD , DA ,$ or $DC$; otherwise $Z$ is $0$.

Answer the following questions.

(1) Explain in $50$ words or less what a synchronous sequential circuit is.

(2) Draw a state transition diagram of the circuit in the form of a Mealy graph. Use $4$ states corresponding to each character. Each state represents that the corresponding character is the last input.

(3) The output $Z$ must be $0$ until the first two characters are given as inputs to the circuit. Answer which state in the state transition diagram in (2) should be the initial state to achieve this.

(4) Simplify the state transition diagram in (2) so that it has $3$ states.

(5) Create a state transition table from the state transition diagram in (4).

(6) Draw Karnaugh maps from the state transition table in (5).

(7) Simplify the logic as much as possible using the Karnaugh maps in (6), and draw the circuit using MIL simbols shown in the Fig.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p1.png" width="700" height="600" alt=""/>
</figure>

## **Kai**
### (1)
Synchronous sequential circuits are digital circuits that use clock signals to determine the timing of their operations.

### (2)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p2.png" width="600" height="525" alt=""/>
</figure>

### (3)
State $B$ should be the initial state. Since any two consecutive input $BX$ only inputs $0$.

### (4)
<!-- |$S_1$|$S_0$|$I_1$|$I_0$|$Z$|
|-|-|-|-|-|
|0|0|0|0|1|
|0|0|0|1|0|
|0|0|1|0|1|
|0|0|1|1|0|
|0|1|0|0|0|
|0|1|0|1|0|
|0|1|1|0|0|
|0|1|1|1|0|
|1|0|0|0|0|
|1|0|0|1|1|
|1|0|1|0|0|
|1|0|1|1|1|
|1|1|0|0|1|
|1|1|0|1|0|
|1|1|1|0|1|
|1|1|1|1|0| -->
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p3.png" width="400" height="800" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p4.png" width="600" height="540" alt=""/>
</figure>

### (5)
<!-- |$S_1$|$S_0$|$I_1$|$I_0$|Z|$S_1'$|$S_0'$|
|-|-|-|-|-|-|-|
|0|0|0|0|1|0|0|
|0|0|0|1|0|0|1|
|0|0|1|0|1|1|0|
|0|0|1|1|0|0|0|
|0|1|0|0|0|0|0|
|0|1|0|1|0|0|1|
|0|1|1|0|0|1|0|
|0|1|1|1|0|0|0|
|1|0|0|0|0|0|0|
|1|0|0|1|1|0|1|
|1|0|1|0|0|1|0|
|1|0|1|1|1|0|0| -->
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p5.png" width="500" height="700" alt=""/>
</figure>

### (6)
<!-- $S_1'$
|$S_1S_0$\\$I_1I_0$|00|01|11|10|
|-|-|-|-|-|
|00|0|0|0|1|
|01|0|0|0|1|
|11|d|d|d|d|
|10|0|0|0|1|

$S_1' = I_1\overline{I_0}$

$S_0'$
|$S_1S_0$\\$I_1I_0$|00|01|11|10|
|-|-|-|-|-|
|00|0|1|0|0|
|01|0|1|0|0|
|11|d|d|d|d|
|10|0|1|0|0|

$S_0' = \overline{I_1}I_0$

$Z$
|$S_1S_0$\\$I_1I_0$|00|01|11|10|
|-|-|-|-|-|
|00|1|0|0|1|
|01|0|0|0|0|
|11|d|d|d|d|
|10|0|1|1|0|

$Z = \overline{S_1S_0I_0} + S_1I_0$ -->
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p6.png" width="322" height="909" alt=""/>
</figure>

### (7)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2024_2_p7.png" width="650" height="500" alt=""/>
</figure>