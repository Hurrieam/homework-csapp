// 软件191 胡瑞平 19031198 20210922算法课作业 Huffman树

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

struct huffman_tree_node;
bool compare(huffman_tree_node a, huffman_tree_node b);

struct huffman_tree_node
{
    int weight;               // 权重
    string code;              // 0/1 Huffman编码
    string data;              // 数据
    huffman_tree_node *left;  // 左孩子
    huffman_tree_node *right; // 右孩子

    huffman_tree_node(string data, int weight)
    {
        this->data = data;
        this->weight = weight;

        this->code = "";
        this->left = nullptr;
        this->right = nullptr;
    }

    // 生成Huffman树
    huffman_tree_node &init(vector<huffman_tree_node> &nodes)
    {
        while (nodes.size() > 1)
        {
            sort(nodes.begin(), nodes.end(), compare);
            huffman_tree_node left = nodes[nodes.size() - 1];
            left.code = "0";
            huffman_tree_node right = nodes[nodes.size() - 2];
            right.code = "1";

            huffman_tree_node new_node("new", left.weight + right.weight);
            new_node.left = &left;
            *(new_node.left) = left;
            new_node.right = &right;
            *(new_node.right) = right;

            nodes.erase(find(nodes.begin(), nodes.end(), left));
            nodes.erase(find(nodes.begin(), nodes.end(), right));
            nodes.push_back(new_node);
        }

        return nodes[0]; // 返回根节点
    }

    // 中序遍历
    void middle_ordered_traverse(huffman_tree_node *node)
    {
        if (node != nullptr)
        {
            middle_ordered_traverse(node->left);
            ::printf("[%s]:%s->", node->data.c_str(), node->code.c_str());
            middle_ordered_traverse(node->right);
        }
        return;
    }

    bool operator==(huffman_tree_node others)
    {
        return this->weight == others.weight;
    }

    // 深拷贝
    huffman_tree_node(const huffman_tree_node &deep_copy)
    {
        this->code = deep_copy.code;
        this->data = deep_copy.data;
        this->weight = deep_copy.weight;

        this->left = new huffman_tree_node;
        this->left->code = deep_copy.code;
        this->left->data = deep_copy.data;
        this->left->weight = deep_copy.weight;
        this->left->left = nullptr;
        this->left->right = nullptr;

        this->right = new huffman_tree_node;
        this->right->code = deep_copy.code;
        this->right->data = deep_copy.data;
        this->right->weight = deep_copy.weight;
        this->right->left = nullptr;
        this->right->right = nullptr;
    }

    huffman_tree_node()
    {
    }
};

bool compare(huffman_tree_node a, huffman_tree_node b)
{
    return a.weight < b.weight;
}

// 11 21 19 17 32
int main()
{
    huffman_tree_node a("a", 11);

    huffman_tree_node b("b", 21);
    huffman_tree_node c("c", 19);
    huffman_tree_node d("d", 17);
    huffman_tree_node e("e", 32);
    vector<huffman_tree_node> nodes;
    nodes.push_back(b);
    nodes.push_back(c);
    nodes.push_back(d);
    nodes.push_back(e);

    huffman_tree_node root = a.init(nodes);
    root.data = "root";

    root.middle_ordered_traverse(&root);

    cout << endl;

    return 0;
}