---
comments: false
title: 東京大学 情報理工学系研究科 電子情報学専攻 2020年度 専門 第2問 
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2020年度 専門 第2問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Let us design a circuit that obtains a 4-bit signed integer $Y_{3..0}$ by calculating 4-bit additon/subtraction of a 4-bit signed integer $A_{3..0}$ and a 2-bit signed integer $B_{1,0}$. The integers $A,B$ and $Y$ are expressed in two's complement. The types of logic gates that you can use arc NOT, AND , OR ,and , XOR , cach of which is equipped with as many inputs as the design requires. Answer the following questions.

(1) Show the maximum and minimum values of $A$ and $B$ in decimal form.

(2) Show a circuit that calculates $A + B$ to obtain $Y$ by combining logic gates. Organize the adder as a ripple carry adder. You can use signals from $A_{3..0},B_{1,0}$, supply voltage $V_{DD}$, and grounding voltage GND as inputs, The output should be $Y_{3..0}$. To simplify the diagram, use the "half-adder" blocks and the "full-adder" blocks after showing gate-level designs of both blocks.

(3) Consider adding an overflow detection mechanism to the circuit designed in (2). Show the overflow detection circuit by combining the logic gates. You can use signals from $A_{3..0},B_{1,0}$ and $Y_{3..0}$ as inputs. The output should be a 1-bit signal named $D$; it should be '1' when the overflow occured, or '0' otherwise.

(4) Show a circuit that calculates $A - B$ to obtain $Y$ by combining logic gates. Organize the adder as a ripple carry adder. You can use signals from $A_{3..0},B_{1,0},V_{DD}$ and GND as inputs. The output should be $Y_{3..0}$. Use the "half-adder" blocks and the "full-adder" blocks in (2).

(5) Show all the input patterns that cause overflows for the calculation designed in (4).

## **Kai**
### (1)

$$
A:[-8,7] \quad B:[-2,1]
$$

### (2)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p1.png" width="700" height="500" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p2.png" width="700" height="400" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p3.png" width="460" height="600" alt=""/>
</figure>

### (3)
|$A_3$|$B_1$|$Y_3$|$O$|
|-|-|-|-|
|0|0|0|0|
|0|0|1|1|
|0|1|0|0|
|0|1|1|0|
|1|0|0|0|
|1|0|1|0|
|1|1|0|1|
|1|1|1|0|

$$
O = \overline{A}_3\overline{B}_1Y_3 + A_3B_1\overline{Y}_3
$$

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p4.png" width="700" height="380" alt=""/>
</figure>

### (4)

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2020_2_p5.png" width="429" height="583" alt=""/>
</figure>

### (5)

$$
\begin{aligned}
& A: 0111 \qquad B:10,11 \\
& A: 0110 \qquad B:10 \\
& A: 1000 \qquad B:01
\end{aligned}
$$