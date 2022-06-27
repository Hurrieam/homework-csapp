using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// 用鼠标控制视角（上帝角色控制）（模拟VR眼镜）
// 分别挂载给每个摄像机（有几个挂几个）
public class ViewControl_Mouse : MonoBehaviour
{

    private enum RotationAxes
    {
        MouseXAndY = 0,
        MouseX = 1,
        MouseY = 2
    }
    private RotationAxes m_axes = RotationAxes.MouseXAndY;

    // 两个方向转向的灵敏度
    private float m_sensitivityX = 1.5f;
    private float m_sensitivityY = 1.5f;

    // 水平方向的镜头转向
    private float m_minimumX = -360f;
    private float m_maximumX = 360f;
    // 垂直方向的镜头转向 (这里给个限度 最大仰角为45°)
    private float m_minimumY = -45f;
    private float m_maximumY = 45f;

    float m_rotationY = 0f;

    // Use this for initialization
    void Start()
    {
        // 防止刚体影响镜头旋转
        if (GetComponent<Rigidbody>())
        {
            GetComponent<Rigidbody>().freezeRotation = true;
        }
        // 隐藏鼠标光标
        Cursor.visible = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (m_axes == RotationAxes.MouseXAndY)
        {
            float m_rotationX = transform.localEulerAngles.y + Input.GetAxis("Mouse X") * m_sensitivityX;
            m_rotationY += Input.GetAxis("Mouse Y") * m_sensitivityY;
            m_rotationY = Mathf.Clamp(m_rotationY, m_minimumY, m_maximumY);

            transform.localEulerAngles = new Vector3(-m_rotationY, m_rotationX, 0);
        }
        else if (m_axes == RotationAxes.MouseX)
        {
            transform.Rotate(0, Input.GetAxis("Mouse X") * m_sensitivityX, 0);
        }
        else
        {
            m_rotationY += Input.GetAxis("Mouse Y") * m_sensitivityY;
            m_rotationY = Mathf.Clamp(m_rotationY, m_minimumY, m_maximumY);

            transform.localEulerAngles = new Vector3(-m_rotationY, transform.localEulerAngles.y, 0);
        }
    }
}
