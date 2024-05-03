export function transformTree(tree) {
    const init = tree[0]
    const index = 0

    return _buildTree(init, index)

    function _buildTree(value, indexParent) {
        if (indexParent > tree.length + 1 || value === null) {
            return null
        }

        const childLeftIndex  = (indexParent * 2) + 1 
        const childRigthIndex = (indexParent * 2) + 2

        const childLeftValue  = tree[childLeftIndex] 
        const childRightValue = tree[childRigthIndex] 

        return {
            value,
            left: childLeftValue !== undefined ? _buildTree(childLeftValue, childLeftIndex) : null,
            right: childRightValue !== undefined ? _buildTree(childRightValue, childRigthIndex) : null 
        }
    }
}