for i in 1 2 3 4 5 6
do
if [ "$i" -eq 3 ]
then
continue
else
echo "$i"
fi
done
