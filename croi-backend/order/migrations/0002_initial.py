<<<<<<< HEAD
# Generated by Django 4.0.1 on 2022-02-10 20:14
=======
# Generated by Django 4.0.1 on 2022-02-10 14:47
>>>>>>> cf52aa1f9b1e37c9993e2a7f2552cef40664223f

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
<<<<<<< HEAD
        ('user', '0001_initial'),
=======
>>>>>>> cf52aa1f9b1e37c9993e2a7f2552cef40664223f
        ('order', '0001_initial'),
        ('project', '0001_initial'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='special_user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='order', to='user.specialuser'),
        ),
        migrations.AddField(
            model_name='myloans',
            name='loans',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_loans', to='project.loans'),
        ),
        migrations.AddField(
            model_name='myloans',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_loans', to='order.order'),
        ),
        migrations.AddField(
            model_name='myinvestment',
            name='investment',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_investment', to='project.investment'),
        ),
        migrations.AddField(
            model_name='myinvestment',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_investment', to='order.order'),
        ),
        migrations.AddField(
            model_name='mybond',
            name='bond',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_bond', to='project.bond'),
        ),
        migrations.AddField(
            model_name='mybond',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_bond', to='order.order'),
        ),
        migrations.AddField(
            model_name='myaction',
            name='action',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_action', to='project.action'),
        ),
        migrations.AddField(
            model_name='myaction',
            name='order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='my_action', to='order.order'),
        ),
    ]
