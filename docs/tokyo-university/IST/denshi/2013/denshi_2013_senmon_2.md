---
sidebar_label: "2013年度 専門 第2問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 電子情報学専攻 2013年度 専門 第2問 


## **Author**
[Josuke](https://www.xiaohongshu.com/user/profile/6136a1b40000000002025c4f?xhsshare=QQ&appuid=5de61ebb0000000001004b64&apptime=1718276766)

## **Description**
Let us design a binary digital synchronous sequential circuit which outputs $6,1,0,2$ and $5$ in this order. After outputting $5$, it continuously generates $6,1,0,2$ and $5$ periodically. Here, you can only use the following logic components: AND, OR , NOT , NAND , NOR , D flip flop and JK flip flop.

(1) Describe what a sequential circuit is within $10$ words.

(2) For preparation, design a synchronous mod-8 binary counter and draw it using MIL symbols (see the Flg.below).

(3) Using (2), design a synchronous mod-5 binary counter and draw it using MIL symbols. Simplify the circuit as far as possible.

(4) Using (3) as a black box, design the synchronous sequential circuit producing $6,1,0,2$ and $5$ periodically and draw it using MIL symbols. Simplify the circuit as far as possible, using Karnaugh Map.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2013_2_p1.png" width="700" height="650" alt=""/>
</figure>

## **Kai**
### (1)
Circuit's output determined by its input and past states.

### (2)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2013_2_p2.png" width="600" height="300" alt=""/>
</figure>

### (3)
<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2013_2_p3.png" width="700" height="450" alt=""/>
</figure>

### (4)
|$S_2$|$S_1$|$S_0$|$S_2'$|$S_1'$|$S_0'$|
|-|-|-|-|-|-|
|0|0|0|1|1|0|
|0|0|1|0|0|1|
|0|1|0|0|0|0|
|0|1|1|0|1|0|
|1|0|0|1|0|1|

<!-- $S_2'$
|$S_2$\\$S_1S_0$|00|01|11|10|
|-|-|-|-|-|
|0|1|0|0|0|
|1|1|x|x|x|

$S_2' = \overline{S_1}\overline{ S_0}$

$S_1'$
|$S_2$\\$S_1S_0$|00|01|11|10|
|-|-|-|-|-|
|0|1|0|1|0|
|1|0|x|x|x|

$S_1' = \overline{S_2}\overline{S_1}\overline{S_0} + S_1S_0$

$S_0'$
|$S_2$\\$S_1S_0$|00|01|11|10|
|-|-|-|-|-|
|0|0|1|0|0|
|1|1|x|x|x|

$S_0' = S_2 + \overline{S_1}S_0$ -->

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2013_2_p4.png" width="400" height="900" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/denshi_2013_2_p5.png" width="700" height="310" alt=""/>
</figure>