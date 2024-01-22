import { Badge } from "@rneui/themed"

export const ItemBadge = ({ value }: { value: string }) => {
  return (
    <Badge 
      value={value} 
      badgeStyle={{ 
        backgroundColor: '#61664F',
        borderRadius: 7,
        minWidth: 60,
      }}
      textStyle={{
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white'
      }}
    />
  )
}