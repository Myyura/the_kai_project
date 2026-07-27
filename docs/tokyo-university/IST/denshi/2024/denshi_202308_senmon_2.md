---
sidebar_label: "2023年8月実施 専門 第2問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Mealy-Sequence-Detector-State-Minimization
  - Electrical-Electronic.Digital-Logic.Karnaugh-Map-Minimization
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2023年8月実施 専門 第2問 


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

### 题目描述

设计如下二进制数字同步时序电路：

- 电路有两个输入 $(X_1,X_0)$ 和一个输出 $Z$；
- 输入编码字符 $A$ 至 $D$：$A=(0,0)$、$B=(0,1)$、$C=(1,0)$、$D=(1,1)$；
- 最近连续输入的两个字符为 $AA,AC,CB,CD,DA,DC$ 之一时，$Z=1$，否则 $Z=0$。

回答下列问题，所用 MIL 符号见上图。

(1) 用不超过 $50$ 个词解释什么是同步时序电路。

(2) 以 Mealy 图形式画出状态转移图。使用分别对应字符 $A,B,C,D$ 的 $4$ 个状态，每个状态表示该字符是最近一次输入。

(3) 在最初两个字符输入完成之前，输出必须保持 $Z=0$。为满足这一条件，说明 (2) 的状态转移图应以哪个状态为初始状态。

(4) 化简 (2) 的状态转移图，使其只含 $3$ 个状态。

(5) 根据 (4) 的状态转移图写出状态转移表。

(6) 根据 (5) 的状态转移表画卡诺图。

(7) 利用 (6) 的卡诺图尽可能化简逻辑，并用上图所示 MIL 符号画出电路。

#### 考点

- Mealy 序列检测器：要求根据相邻字符对决定输出，并处理初始输入尚不足两个字符时的输出约束。
- 状态最小化与编码：要求识别等价的字符历史状态，把四状态机化简为三状态机并列出转移表。
- 卡诺图化简：要求由现态、输入、次态及输出关系求最简逻辑并实现同步电路。

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
